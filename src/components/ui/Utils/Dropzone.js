'use client';

import {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {CloudUpload, Check, Trash2} from "lucide-react";

const getFileIcon = (fileType) => {
    if (fileType.includes('image')) return '🖼️';
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('video')) return '🎥';
    if (fileType.includes('audio')) return '🎵';
    return '📁';
};

const getFileTypeLabel = (fileType) => {
    if (fileType.includes('image/jpeg') || fileType.includes('image/jpg')) return 'JPG';
    if (fileType.includes('image/png')) return 'PNG';
    if (fileType.includes('image/svg')) return 'SVG';
    if (fileType.includes('image/gif')) return 'GIF';
    return 'IMG';
};

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const Dropzone = () => {
    const [files, setFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);

    // Simulate file upload with progress
    const simulateUpload = useCallback((file) => {
        const fileId = Date.now() + Math.random();
        const newFile = {
            id: fileId,
            file: file,
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            status: 'uploading' // 'uploading', 'completed', 'error'
        };

        setFiles(prev => [...prev, newFile]);

        // Simulate upload progress
        const interval = setInterval(() => {
            setFiles(prev => prev.map(f => {
                if (f.id === fileId) {
                    const newProgress = Math.min(f.progress + Math.random() * 15, 100);
                    const isCompleted = newProgress >= 100;

                    return {
                        ...f,
                        progress: newProgress,
                        status: isCompleted ? 'completed' : 'uploading'
                    };
                }
                return f;
            }));
        }, 200);

        // Clear interval when upload completes
        setTimeout(() => {
            clearInterval(interval);
            setFiles(prev => prev.map(f =>
                f.id === fileId ? {...f, progress: 100, status: 'completed'} : f
            ));
        }, 3000);
    }, []);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length > 0) {
            setRejectedFiles(rejectedFiles);
            setTimeout(() => setRejectedFiles([]), 5000);
        }

        acceptedFiles.forEach(file => {
            simulateUpload(file);
        });
    }, [simulateUpload]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        multiple: true,
        maxSize: 10 * 1024 * 1024, // 10MB
        accept: {
            'image/svg+xml': ['.svg'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/gif': ['.gif']
        }
    });

    const removeFile = (fileId) => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
    };

    return (
        <div className="space-y-3 text-sm">
            <div
                className="flex flex-col gap-3 items-center text-center rounded-xl border border-[#E4E7EC] py-4 px-6"  {...getRootProps()}>
                <input {...getInputProps()} />
                <div
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-[#E4E7EC] shadow-md">
                    <CloudUpload size={20} className="text-[#344054]"/>
                </div>

                <div className="text-[#475467]">
                    <div>
                        <span className="font-semibold text-[#0C75AA] hover:cursor-pointer">Click to upload</span>
                        <span> or drag and drop</span>
                    </div>

                    <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </div>
            </div>

            {files.length > 0 && (
                <div className="space-y-3 max-h-[250px] overflow-y-auto">
                    {files.map((file) => (
                        <div
                            key={file.id}
                            className="bg-white border border-[#E4E7EC] rounded-xl p-4 flex gap-3 items-center justify-between h-24 shadow-sm"
                        >
                            <div className="flex items-center space-x-3 flex-1">
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-10 h-10 bg-[#0E8AC8] rounded flex items-center justify-center text-white text-xs font-bold">
                                        {getFileTypeLabel(file.type)}
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium text-gray-900 truncate">
                                            {file.name}
                                        </p>
                                        {file.status === 'completed' && (
                                            <div className="flex-shrink-0 ml-2">
                                                <div
                                                    className="w-4 h-4 bg-[#E2F4FD] rounded-xs flex items-center justify-center">
                                                    <Check size={12} className="text-[#0E8AC8]"
                                                           strokeWidth={3}/>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-left text-[#475467]">
                                        {formatFileSize(file.size)}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="mt-2">
                                        <div className="flex mt-1 w-full rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    file.status === 'completed' ? 'bg-[#0E8AC8]' :
                                                        file.status === 'error' ? 'bg-red-500' : 'bg-[#0E8AC8]'
                                                }`}
                                                style={{width: `${file.progress}%`}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center h-full">
                                <button
                                    className="p-1 rounded-md text-[#344054] hover:cursor-pointer hover:text-[#182230] hover:bg-[#F9FAFB] duration-300"
                                    onClick={() => removeFile(file.id)}>
                                    <Trash2 color="#344054" size={20}/>
                                </button>

                                <span className="text-right">{Math.round(file.progress)}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropzone;