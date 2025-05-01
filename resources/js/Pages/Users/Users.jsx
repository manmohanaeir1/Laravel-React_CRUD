import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';

const Users = ({ user, users }) => {
    console.log(user);
    return (
        <AuthenticatedLayout
            user={user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>

                
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div>
                <h2 className="text-2xl font-medium text-center">User Management</h2>

                {/* Responsive Table Container */}
                <div className="overflow-x-auto rounded border border-gray-300 shadow-sm">
                    <table className="min-w-full divide-y-2 divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr className="text-left font-medium text-gray-900">
                                <th className="px-3 py-2 whitespace-nowrap">Name</th>
                                <th className="px-3 py-2 whitespace-nowrap">Date of Registration</th>
                                <th className="px-3 py-2 whitespace-nowrap">Email</th>
                                <th className="px-3 py-2 whitespace-nowrap">Date of Update</th>
                                <th className="px-3 py-2 whitespace-nowrap">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="text-gray-900">
                                    <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{user.created_at}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{user.email}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">{user.updated_at}</td>
                                    <td className="px-3 py-2 whitespace-nowrap">
                                        <button
                                            className="text-blue-600 hover:underline"
                                            onClick={() => console.log(`Edit user ${user.id}`)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="ml-4 text-red-600 hover:underline"
                                            onClick={() => console.log(`Delete user ${user.id}`)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default Users;