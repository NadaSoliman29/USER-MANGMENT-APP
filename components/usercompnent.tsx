import { useEffect, useState } from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  website: string;
}

interface UserComponentProps {
  users: User[];
}

const UserComponent = ({ users }: UserComponentProps) => {
  // No need to use useState for users here since it's received as props

  useEffect(() => {
    // Optional: If you need to do something when users change
  }, [users]);

  return (
    <>
      {users.map((user) => (
        <tr key={user.id} className="text-center">
          <td className="border px-6 py-4">{user.name}</td>
          <td className="border px-6 py-4">{user.email}</td>
          <td className="border px-6 py-4">{user.address.city}</td>
          <td className="border px-6 py-4">{user.website}</td>
          <td className="border px-6 py-4">
            <button className="bg-green-500 text-white px-4 py-1 rounded-full">
              Active
            </button>
          </td>
          <td className="border px-6 py-4 flex justify-center">
            <button className="mr-2">
              <BiEdit size={20} color="rgb(244, 197, 94)" />
            </button>
            <button>
              <BiTrashAlt size={20} color="rgb(244, 63, 94)" />
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserComponent;
