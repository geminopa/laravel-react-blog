import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import CreatePostForm from './Partials/CreatePostForm';

export default function Index({ auth, posts }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        
                        {/* post新規作成 */}
                        <CreatePostForm
                            posts={posts}
                            className="max-w-xl"
                        />

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}