import crypto from 'crypto';

export class PBKDF2PasswordHasher {
    constructor() {
        this.algorithm = 'pbkdf2_sha256';
        this.iterations = 870000;
        this.digest = 'sha256';
    }

    decode(encoded) {
        const parts = encoded.split('$');
        if (parts.length !== 4) {
            throw new Error('Invalid encoded password format');
        }

        const [algorithm, iterations, salt, hash] = parts;

        if (algorithm !== this.algorithm) {
            throw new Error(`Unsupported algorithm: ${algorithm}`);
        }

        return {
            algorithm,
            hash,
            iterations: parseInt(iterations, 10),
            salt
        };
    }

    encode(password, salt, iterations) {
        const hash = crypto.pbkdf2Sync(
            password,
            salt,
            iterations,
            32,
            this.digest
        );

        const hashBase64 = hash.toString('base64');
        return `${this.algorithm}$${iterations}$${salt}$${hashBase64}`;
    }

    verify(password, encoded) {
        try {
            const decoded = this.decode(encoded);
            const encoded2 = this.encode(password, decoded.salt, decoded.iterations);

            if (encoded.length !== encoded2.length) {
                return false;
            }

            let result = 0;
            for (let i = 0; i < encoded.length; i++) {
                result |= encoded.charCodeAt(i) ^ encoded2.charCodeAt(i);
            }

            return result === 0;
        } catch (error) {
            return false;
        }
    }
}