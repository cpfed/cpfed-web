'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ACE editor to avoid SSR issues
const AceEditor = dynamic(
    async () => {
        const ace = await import('react-ace');

        // Import modes (languages)
        await import('ace-builds/src-noconflict/mode-javascript');
        await import('ace-builds/src-noconflict/mode-python');
        await import('ace-builds/src-noconflict/mode-html');
        await import('ace-builds/src-noconflict/mode-css');
        await import('ace-builds/src-noconflict/mode-json');
        await import('ace-builds/src-noconflict/mode-sql');
        await import('ace-builds/src-noconflict/mode-c_cpp');

        // Import themes
        await import('ace-builds/src-noconflict/theme-chrome');

        // Import extensions
        await import('ace-builds/src-noconflict/ext-language_tools');
        await import('ace-builds/src-noconflict/ext-searchbox');

        return ace.default;
    },
    {
        loading: () => <div className="p-4">Loading editor...</div>,
        ssr: false,
    }
);

const CodeEditor = ({
                        value = '',
                        onChange,
                        mode = 'javascript',
                        theme = 'chrome',
                        width = '100%',
                        height = '400px',
                        fontSize = 14,
                        showPrintMargin = true,
                        showGutter = true,
                        highlightActiveLine = true,
                        readOnly = false,
                        placeholder = 'Enter your code here...',
                        className = '',
                    }) => {
    const [editorValue, setEditorValue] = useState(value);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (newValue) => {
        setEditorValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    if (!isLoaded) {
        return (
            <div
                className={`border border-gray-300 rounded ${className}`}
                style={{ width, height }}
            >
                <div className="flex items-center justify-center h-full">
                    Loading editor...
                </div>
            </div>
        );
    }

    return (
        <div className={className}>
            <AceEditor
                mode={mode}
                theme={theme}
                value={editorValue}
                onChange={handleChange}
                width={width}
                height={height}
                fontSize={fontSize}
                showPrintMargin={showPrintMargin}
                showGutter={showGutter}
                highlightActiveLine={highlightActiveLine}
                readOnly={readOnly}
                placeholder={placeholder}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 4,
                    useWorker: false, // Disable web workers to avoid Next.js issues
                }}
                editorProps={{
                    $blockScrolling: true,
                }}
                commands={[
                    {
                        name: 'save',
                        bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
                        exec: () => {
                            // Handle save action
                            console.log('Save triggered');
                        },
                    },
                ]}
            />
        </div>
    );
};

export default CodeEditor;