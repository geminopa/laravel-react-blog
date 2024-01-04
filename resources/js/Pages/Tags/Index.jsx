import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import StoreTagForm from './Partials/StoreTagForm';
import IndexTags from './Partials/IndexTags';

export default function Index({ auth, tags }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tag 新規作成" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="py-5 px-2">
                            {/* tag一覧 */}
                            <IndexTags
                                tags={tags}
                            />
                        </div>
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Create Tag</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                タグ名を入力してください。
                            </p>
                        </header>
                        
                        {/* tag新規作成 */}
                        <StoreTagForm
                        />

                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    )
}