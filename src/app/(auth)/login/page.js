'use client';

import {useState} from "react";
import {LoginButton, RegisterButton} from "@/components/ui";
import {CircleAlert} from 'lucide-react';
import {signIn} from 'next-auth/react';
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [handle, setHandle] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [attemptsLeft, setAttemptsLeft] = useState(5);
    const router = useRouter();

    const checkCredentials = async () => {
        const result = await signIn('credentials', {
            handle: handle,
            password: password,
            redirect: true,
            callbackUrl: '/dashboard'
        });

        if (result?.error) {
            setIncorrectPassword(true);
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center px-20 py-24 bg-[#F9FAFB]">
            <div className="w-[160px] h-[64px] bg-[#D9D9D9]"/>
            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-3xl text-center">Войдите в учетную запись</h1>
                <p className="text-[#475467] text-center">Добро пожаловать обратно! Введите свои данные.</p>
            </div>
            <div
                className={`p-8 bg-white rounded-lg shadow-md ${incorrectPassword ? "h-[448px]" : "h-[360px]"} w-[440px]`}>
                {incorrectPassword && (
                    <div className="mb-5 flex px-4 py-3 gap-3 rounded-md bg-[#FEF3F2]">
                        <CircleAlert color='red' size={16}/>
                        <span
                            className="text-sm">Неправильный логин или пароль. Осталось попыток: {attemptsLeft}.</span>
                    </div>
                )}

                <label className="flex flex-col gap-1.5 font-medium text-sm text-[#344054]">
                    <span>Логин</span>

                    <input type="text" value={handle} onChange={((e) => setHandle(e.target.value))}
                           className={`border px-3.5 py-2.5 rounded-md h-11 focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] ${incorrectPassword ? 'border-[#FDA29B] focus:border-[#FDA29B]' : 'border-[#D0D5DD]'}`}
                           placeholder="Введите логин"/>
                </label>
                <label className="flex flex-col gap-1.5 mt-5 font-medium text-sm text-[#344054]">
                    <span>Пароль</span>
                    <input
                        type="password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                checkCredentials();
                            }
                        }}
                        className={`border px-3.5 py-2.5 rounded-md h-11 focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] ${incorrectPassword ? 'border-[#FDA29B] focus:border-[#FDA29B]' : 'border-[#D0D5DD]'}`}
                        placeholder="Введите пароль"
                    />
                </label>

                <div className="flex flex-col gap-4 mt-6">
                    <LoginButton text="Войти" width="100%" height="h-11" onClick={checkCredentials}/>
                    <RegisterButton link="/register" text="Регистрация" height="h-11"/>
                </div>
            </div>
        </div>
    );
}