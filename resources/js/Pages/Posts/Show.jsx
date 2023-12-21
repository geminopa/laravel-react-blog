import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Show({auth, post}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            aaa
        </AuthenticatedLayout>
    )
}