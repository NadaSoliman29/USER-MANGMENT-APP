// utils/api.ts
"use client"
import { User } from "../types/user"


const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data: User[] = await response.json();
    return data;
  }
  
  export async function addUser(newUser: User): Promise<User> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error('Failed to add user');
    }
    const data: User = await response.json();
    return data;
  }
  
  export async function updateUser(updatedUser: User): Promise<User> {
    const url = `${API_URL}/${updatedUser.id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    const data: User = await response.json();
    return data;
  }
  
  export async function deleteUser(userId: String): Promise<void> {
    const url = `${API_URL}/${userId}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
  }