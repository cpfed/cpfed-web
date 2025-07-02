'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function CodeUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];

        const codeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.cpp', '.c', '.html', '.css', '.php', '.rb', '.go', '.rs'];
        const isCodeFile = codeExtensions.some(ext => file?.name.toLowerCase().endsWith(ext));

        if (file && isCodeFile) {
            setSelectedFile(file);
            setUploadResult(null);
        } else {
            alert('Please select a valid code file');
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('codeFile', selectedFile);

            const response = await fetch('/api/upload-code', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setUploadResult({ success: true, message: 'Code uploaded successfully!' });
                setSelectedFile(null);
                // Reset file input
                document.getElementById('codeFileInput').value = '';
            } else {
                setUploadResult({ success: false, message: result.error || 'Upload failed' });
            }
        } catch (error) {
            setUploadResult({ success: false, message: 'Upload error: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="flex gap-4 items-center">
            <div>
                <input
                    id="codeFileInput"
                    type="file"
                    onChange={handleFileSelect}
                    accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c,.html,.css,.php,.rb,.go,.rs"
                    className="hidden"
                />
                <label
                    htmlFor="codeFileInput"
                    className="flex cursor-pointer text-[#0C75AA] border border-[#40B6F2] hover:bg-[#E2F4FD] hover:text-[#066493] font-semibold py-2.5 px-3.5 rounded-lg gap-1.5 transition-colors duration-300"
                >
                    <Upload />
                    <span>Загрузить</span>
                </label>
            </div>

            {selectedFile && (
                <p className="font-medium">{selectedFile.name}</p>
            )}
        </div>
    );
}