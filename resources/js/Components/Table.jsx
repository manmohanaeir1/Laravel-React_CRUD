import React from 'react';


const Table = ({users}) => {
    return (
        <div>
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

                                            <a href={`/edit/user/${user.id}`}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Edit
                                            </a>
                                                 
                                            </td>
                                            <td className="px-3 py-2 whitespace-nowrap">    
                                               <a href={`/delete/user/${user.id}`}
                                                className="text-red-600 hover:underline"
                                            >
                                                Delete
                                            </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
        </div>
    );
}

export default Table;
