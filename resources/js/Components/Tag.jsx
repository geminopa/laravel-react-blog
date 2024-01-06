import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import React from 'react';

export default function Tag({ tag }) {
    return (
        <a href={`/tags/${tag.id}`} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 mx-2 font-medium text-gray-600 hover:bg-gray-100">#{tag.name}</a>
    );
}