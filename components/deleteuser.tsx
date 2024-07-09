// import { useEffect, useState } from "react";
// import { BiEdit, BiTrashAlt } from 'react-icons/bi';

// const UserComponent = ({ users, setUsers }) => {
//   const deleteUser = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then(() => {
//         setUsers((values) => {
//           return values.filter((item) => item.id !== id);
//         });
//         // Assuming AppToaster is correctly defined elsewhere
//         AppToaster.show({
//           message: "User deleted successfully",
//           intent: "success",
//           timeout: 3000,
//         });
//       })
//       .catch((error) => {
//         console.error('Error deleting user:', error);
//         // Handle error appropriately, e.g., show error toast
//       });
//   };

//   const onChangeHandler = (id, key, value) => {
//     setUsers((values) => {
//       return values.map((item) =>
//         item.id === id ? { ...item, [key]: value } : item
//       );
//     });
//   };

//   return (
//     <>
//       {users.map((user) => (
//         <tr key={user.id} className="text-center">
//           <td className="border px-6 py-4">{user.name}</td>
//           <td className="border px-6 py-4">{user.email}</td>
//           <td className="border px-6 py-4">{user.address.city}</td>
//           <td className="border px-6 py-4">{user.website}</td>
//           <td className="border px-6 py-4">
//             <button className="bg-green-500 text-white px-4 py-1 rounded-full">
//               Active
//             </button>
//           </td>
//           <td className="border px-6 py-4 flex justify-center">
//             <button className="mr-2">
//               <BiEdit size={20} color="rgb(244, 197, 94)" />
//             </button>
//             <button onClick={() => deleteUser(user.id)}>
//               <BiTrashAlt size={20} color="rgb(244, 63, 94)" />
//             </button>
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// };

// export default UserComponent;
