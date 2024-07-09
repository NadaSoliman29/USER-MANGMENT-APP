// pages/index.tsx
"use client"
import { useState, useEffect } from 'react';
import { User } from "../types/user"
import { fetchUsers,addUser,updateUser,deleteUser } from '../utils/api';
import AddUserForm from "../components/adduser";
import { BiTrashAlt, BiEdit } from 'react-icons/bi';
import { userInfo } from 'os';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialUsers = await fetchUsers();
        setUsers(initialUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleAddUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };
  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };
  const handleUpdateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.name === updatedUser.name ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };
  const handleDeleteUser = async (userName: string) => {
    try {
      await deleteUser(userName); // Pass user.id instead of userInfo
      const updatedUsers = users.filter((user) => user.id !== userName);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);       
    }
  };
  return (
    <div>
      <AddUserForm  onAddUser={handleUpdateUser} />
      <div className="container mx-auto">
      <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Phone</th>
          <th className="px-6 py-3">website</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
      {users.map((user) => (
          <tr key={user.name} className="text-center">
            <td className="border px-6 py-4">{user.name}</td>
            <td className="border px-6 py-4">{user.email}</td>
            <td className="border px-6 py-4">{user.phone}</td>
            <td className="border px-6 py-4">{user.website}</td>
            <td className="border px-6 py-4 flex justify-center">
              <button className="mr-2"onClick={() => handleEditUser(user)} >
                <BiEdit size={20} color="rgb(244, 197, 94)" />
              </button>
              <button onClick={() => handleDeleteUser(user.name)} >
                <BiTrashAlt size={20} color="rgb(244, 63, 94)" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      </table> 
      </div>
    </div>
  );
};

export default Home;
