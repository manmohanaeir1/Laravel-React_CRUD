import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
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
                        <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div>
                              <h2 className="text-2xl font-medium text-center">User Management</h2>
                              
                        <Table  users={users} />    
                       
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default Users;