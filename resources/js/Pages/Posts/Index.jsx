import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import StorePostForm from './Partials/StorePostForm';

export default function Index({ auth, posts }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Create Post</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                投稿内容を入力してください。
                            </p>
                        </header>
                        
                        {/* post新規作成 */}
                        <StorePostForm
                            posts={posts}
                            className="max-w-xl"
                        />

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}