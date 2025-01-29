import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddEntity(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        const {name, age, description}= formData;
        try{
            const response=await axios.post("http://localhost:3010/users/create-data", formData)
            console.log(response.data)
            navigate("/entities")
        }
        catch(er){
            console.log(er);
        }

    }
    return(
        <div className="p-8 font-sans bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-8 text-center shadow-lg">Add New User</h1>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-xl space-y-6">
            <div>
                <label htmlFor="name" className="text-teal-300 font-semibold">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div>
                <label htmlFor="age" className="text-teal-300 font-semibold">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div>
                <label htmlFor="description" className="text-teal-300 font-semibold">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
                >
                    Submit
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/entities')}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
    )
}
export default AddEntity