import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';

export default function Show({auth, post}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={post.title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">{post.title}</h2>
                        </header>
                        <body>
                            <ReactMarkdown className="markdown">{post.content}</ReactMarkdown>
                        </body>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}