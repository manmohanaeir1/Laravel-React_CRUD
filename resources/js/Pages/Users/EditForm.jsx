import React from 'react';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

function EditForm({ user_Details }) {
    const { data, setData, post, processing, errors } = useForm({
        id: user_Details.id || '',
        name: user_Details.name || '',
        email: user_Details.email || '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('users.update', { id: data.id })); // Pass the 'id' parameter here
    };

    return (
        <AuthenticatedLayout
            
        >
                        <Head title="Users" />
        <div>
            <div className="max-w-md mx-auto p-6 bg-white border rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Edit User</h2>

                <form onSubmit={submit} className="mx-auto max-w-screen-xl px-4 pt-3 py-16 sm:px-6 lg:px-8">
                    {/* Hidden Method Field */}
                    <input type="hidden" name="_method" value="PUT" />

                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <TextInput
                            id="name"
                            name="name"
                            className="w-full"
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <TextInput
                            id="email"
                            name="email"
                            className="w-full"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>

                    

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}

export default EditForm;