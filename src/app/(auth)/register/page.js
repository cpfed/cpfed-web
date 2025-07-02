'use client';

import React, { useState } from 'react';
import { BackButton, LoginButton } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatedPassword: ''
    });

    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleGoBack = () => {
        router.back();
    };

    const checkEmailExists = (email) => {
        // correct email? already exists?
        return false; // Return false for now to avoid blocking registration
    };

    const checkUsernameExists = (username) => {
        // username correct? already exists?
        return false; // Return false for now to avoid blocking registration
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Логин обязателен';
        } else if (formData.username.length < 3) {
            newErrors.username = 'Логин должен содержать минимум 3 символа';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email обязателен';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Введите корректный email';
        }

        if (!formData.password) {
            newErrors.password = 'Пароль обязателен';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен содержать минимум 6 символов';
        }

        if (!formData.repeatedPassword) {
            newErrors.repeatedPassword = 'Повторите пароль';
        } else if (formData.password !== formData.repeatedPassword) {
            newErrors.repeatedPassword = 'Пароли не совпадают';
        }

        return newErrors;
    };

    const checkCredentials = () => {
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        const emailExists = checkEmailExists(formData.email);
        const usernameExists = checkUsernameExists(formData.username);

        const serverErrors = {};

        if (emailExists) {
            serverErrors.email = 'Email уже существует';
        }

        if (usernameExists) {
            serverErrors.username = 'Логин уже существует';
        }

        if (Object.keys(serverErrors).length > 0) {
            setErrors(serverErrors);
            return;
        }

        // If all validations pass, proceed with registration
        console.log('Registration data:', formData);
        // Add your registration API call here
        // For example: await registerUser(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        checkCredentials();
    };

    return (
        <div className="flex flex-col gap-8 items-center px-20 py-24 bg-[#F9FAFB] min-h-screen">
            <div className="w-[160px] h-[64px] bg-[#D9D9D9] rounded-md flex items-center justify-center" />

            <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-3xl text-center">Заполните форму</h1>
                <p className="text-[#475467] text-center">Добро пожаловать! Введите свои данные.</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="p-8 bg-white rounded-lg shadow-md w-[440px]"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="username" className="font-medium text-sm text-[#344054]">
                            Логин
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className={`border px-3.5 py-2.5 rounded-md h-11 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] focus:border-transparent ${
                                errors.username ? 'border-red-500' : 'border-[#D0D5DD]'
                            }`}
                            placeholder="Введите логин"
                        />
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-medium text-sm text-[#344054]">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`border px-3.5 py-2.5 rounded-md h-11 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] focus:border-transparent ${
                                errors.email ? 'border-red-500' : 'border-[#D0D5DD]'
                            }`}
                            placeholder="Введите email"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="font-medium text-sm text-[#344054]">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`border px-3.5 py-2.5 rounded-md h-11 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] focus:border-transparent ${
                                errors.password ? 'border-red-500' : 'border-[#D0D5DD]'
                            }`}
                            placeholder="Введите пароль"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="repeatedPassword" className="font-medium text-sm text-[#344054]">
                            Повторите пароль
                        </label>
                        <input
                            type="password"
                            id="repeatedPassword"
                            name="repeatedPassword"
                            value={formData.repeatedPassword}
                            onChange={handleInputChange}
                            className={`border px-3.5 py-2.5 rounded-md h-11 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E8AC8] focus:border-transparent ${
                                errors.repeatedPassword ? 'border-red-500' : 'border-[#D0D5DD]'
                            }`}
                            placeholder="Повторите пароль"
                        />
                        {errors.repeatedPassword && <span className="text-red-500 text-sm">{errors.repeatedPassword}</span>}
                    </div>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <LoginButton text="Регистрация" width="100%" height="h-11" onClick={checkCredentials}/>
                    <BackButton link="/" text="Отмена" height="h-11" onClick={handleGoBack}/>
                </div>
            </form>
        </div>
    );
}