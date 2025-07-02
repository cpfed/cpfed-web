'use client';

import { useState } from 'react';
import CodeEditor from '../components/AceEditor';

const EditorPage = () => {
    const [code, setCode] = useState(`function salem() {
  return "Salem, Alem!";
}`);

    const [selectedMode, setSelectedMode] = useState('javascript');
    const [selectedTheme, setSelectedTheme] = useState('chrome');

    const modes = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'json', label: 'JSON' },
        { value: 'sql', label: 'SQL' },
        { value: 'c_cpp', label: 'C++' },
    ];

    const themes = [
        { value: 'monokai', label: 'Monokai' },
        { value: 'github', label: 'GitHub' },
        { value: 'terminal', label: 'Terminal' },
        { value: 'solarized_dark', label: 'Solarized Dark' },
    ];

    const handleCodeChange = (newCode) => {
        setCode(newCode);
        console.log('Code updated:', newCode);
    };

    const handleSave = () => {
        // Implement your save logic here
        console.log('Saving code:', code);
        alert('Code saved!');
    };

    return (
        <div>
            {/* Code Editor */}
            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <CodeEditor
                    value={code}
                    onChange={handleCodeChange}
                    mode={selectedMode}
                    theme={selectedTheme}
                    width="100%"
                    height="500px"
                    fontSize={14}
                    className="rounded-lg"
                />
            </div>

            <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="border border-[#D0D5DD] w-[165px] h-9 rounded-sm px-2 py-1 mt-6 cursor-pointer"
            >
                {modes.map((mode) => (
                    <option key={mode.value} value={mode.value}>
                        {mode.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default EditorPage;