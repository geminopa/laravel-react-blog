import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function StoreTagForm() {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const storeTag = (e) => {
        e.preventDefault();
        post(route('tags.store'), { onSuccess: ()=> reset() });
    };

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <form onSubmit={storeTag} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="タグ名" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                    <PrimaryButton className="mt-4" disabled={processing}>Create</PrimaryButton>
                </div>
            </form>
        </div>
    )
}