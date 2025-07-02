'use client';

import {MathJax, MathJaxContext} from 'better-react-mathjax';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Button} from "@/components/ui";
import {use, useEffect, useState} from "react";

const mathJaxConfig = {
    tex: {
        inlineMath: [['~', '~'], ['$', '$']],
        displayMath: [['~~', '~~'], ['$$', '$$']],
        processEscapes: true,
    },
    options: {
        enableMenu: false,
    },
    chtml: {
        scale: 1.13,
        displayAlign: 'left',
        displayIndent: '0em',
    }
};

function DMOJProblem({ content }) {
    const cleanContent = content.replace(/\r\n/g, '\n');

    return (
        <MathJaxContext config={mathJaxConfig}>
            <MathJax>
                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[
                            [remarkGfm, {singleTilde: false}]
                        ]}
                        components={{
                            code: ({node, inline, className, children, ...props}) => {
                                return inline ? (
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                                        {children}
                                    </code>
                                ) : (
                                    <pre className="bg-gray-50 rounded-md border border-[#E4E7EC] p-4 overflow-x-auto">
                                            <code className="text-xl text-[#475467]" {...props}>
                                                {children}
                                            </code>
                                        </pre>
                                );
                            },
                            h2: ({children}) => (
                                <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#101828]">
                                    {children}
                                </h2>
                            ),
                            h3: ({children}) => (
                                <h3 className="text-2xl font-semibold mt-4 mb-2 text-[#101828]">
                                    {children}
                                </h3>
                            ),
                            table: ({children}) => (
                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({children}) => (
                                <thead className="bg-[#F2F4F7]">
                                    {children}
                                </thead>
                            ),
                            tbody: ({children}) => (
                                <tbody>
                                    {children}
                                </tbody>
                            ),
                            tr: ({children}) => (
                                <tr>
                                    {children}
                                </tr>
                            ),
                            th: ({children, style, ...props}) => (
                                <th
                                    className="border border-gray-300 px-4 py-2 text-center font-semibold text-[#101828]"
                                    style={style}
                                    {...props}
                                >
                                    {children}
                                </th>
                            ),
                            td: ({children, style, ...props}) => (
                                <td
                                    className="border border-gray-300 px-4 py-2 text-center"
                                    style={style}
                                    {...props}
                                >
                                    {children}
                                </td>
                            ),
                            p: ({children}) => (
                                <p className="mb-4">
                                    {children}
                                </p>
                            ),
                        }}
                    >
                        {cleanContent}
                    </ReactMarkdown>
                </div>
            </MathJax>
        </MathJaxContext>
    );
}

export default function ProblemPage({params}) {
    const {code} = use(params);
    const [problemDetails, setProblemDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProblemDetail = async () => {
            try {
                const res = await fetch(`/api/problem?code=${code}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch problem details');
                }

                const data = await res.json();
                setProblemDetails(data['data']['object']);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProblemDetail();
    }, [code]);

    useEffect(() => {
        console.log('Current problem details:', problemDetails);
    }, [problemDetails]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="h-full space-y-6 bg-[#F2F4F7] p-6">
            <div className="p-6 rounded-md space-y-7 bg-white">
                <div className="flex justify-between">
                    <h1 className="font-bold text-xl">{problemDetails.name}</h1>
                    <Button link="./submit" text="Отправить решение" height="h-9" width="w-42" font="text-sm"/>
                </div>
                <DMOJProblem content={problemDetails.description}/>
            </div>
        </div>
    );
}