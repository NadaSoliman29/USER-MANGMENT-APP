import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./successmsg";
import ErrorMsg from "./errormsg";

// Define User interface directly
interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  website: string;
}

interface FormProps {
  addUser: (user: User) => void; // Function to add a new user
}

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const AddUserForm = ({ addUser }: FormProps) => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(formData).length <= 0) {
      return <ErrorMsg message={"please Enter Correct Data"}></ErrorMsg>;
    }
    console.log(formData); // For debugging, to see the form data

    // Assuming you have a way to construct a User object from formData
    const newUser: User = {
      id: Math.random(), // Example: Generate a random ID
      name: formData.firstname + " " + formData.lastname,
      email: formData.email,
      address: {
        city: formData.address,
      },
      website: formData.website,
    };

    // Call addUser function to add new user
    addUser(newUser);
  };

  // Showing success message
  if (Object.keys(formData).length > 0) {
    return <Success message={"Data Added"}></Success>;
  }

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-lg"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="lastname"
          className="border w-full px-5 py-3 focus:outline-none rounded-lg"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="email"
          onChange={setFormData}
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-lg"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="address"
          className="border w-full px-5 py-3 focus:outline-none rounded-lg"
          placeholder="Address"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="website"
          className="border w-full px-5 py-3 focus:outline-none rounded-lg"
          placeholder="Website"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault1"
            className="inline-block text-gray-800"
          >
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label
            htmlFor="radioDefault2"
            className="inline-block text-gray-800"
          >
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add{" "}
        <span className="px-1">
          <BiPlus size={24}></BiPlus>{" "}
        </span>
      </button>
    </form>
  );
};

export default AddUserForm;
