import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

import UserComponent from './usercompnent';
// Define User interface directly in the file
interface User {
  id: number;
  name: string;
  email: string;
  address: {	
    city: string;
  };
  website: string;
}

const Table = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUserList(res.data);
    } catch (error) {
      console.error('Error fetching data:', (error as Error).message);
    }
  };

  const handleEdit = (id: number) => {
    // Handle edit functionality
    console.log(`Edit user with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    // Handle delete functionality
    console.log(`Delete user with ID ${id}`);
  };

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">City</th>
          <th className="px-6 py-3">Website</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {userList.map((user) => (
          <tr key={user.id} className="text-center">
            <td className="border px-6 py-4">{user.name}</td>
            <td className="border px-6 py-4">{user.email}</td>
            <td className="border px-6 py-4">{user.address.city}</td>
            <td className="border px-6 py-4">{user.website}</td>
            <td className="border px-6 py-4 flex justify-center">
              <button className="mr-2" onClick={() => handleEdit(user.id)}>
                <BiEdit size={20} color="rgb(244, 197, 94)" />
              </button>
              <button onClick={() => handleDelete(user.id)}>
                <BiTrashAlt size={20} color="rgb(244, 63, 94)" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
