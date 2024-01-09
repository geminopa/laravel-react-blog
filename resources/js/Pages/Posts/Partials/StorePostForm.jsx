import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Select from 'react-select';

export default function StorePostForm() {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        content: '',
        tag_id: '',
    });

    const storePost = (e) => {
        e.preventDefault();
        post(route('posts.store'), { onSuccess: ()=> reset() });
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <form onSubmit={storePost} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="title" value="タイトル" />

                    <TextInput
                        id="title"
                        className="mt-1 block w-full"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                        isFocused
                        autoComplete="title"
                    />
                    <InputError className="mt-2" message={errors.title} />
                </div>
                <div>
                    <InputLabel htmlFor="content" value="本文" />
                    <textarea
                        value={data.content}
                        placeholder="本文を入力してください"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('content', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Post</PrimaryButton>
                </div>
                <div>
                    <InputLabel htmlFor="tag_id" value="タグ" />
                        
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Post</PrimaryButton>
                </div>
            </form>
        </div>
    )
}