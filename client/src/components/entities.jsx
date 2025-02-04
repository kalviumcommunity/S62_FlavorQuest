import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Entities() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get("http://localhost:3010/users/user");
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3010/users/${id}`);
            setData(data.filter((user) => user._id !== id)); 
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="p-8 font-sans bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8 text-center shadow-lg">User Entities</h1>
            <div className="text-center mb-8">
                <button
                    onClick={() => navigate("/add-entity")}
                    className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
                >
                    Add New User
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.map((ele) => (
                    <div
                        key={ele._id}
                        className="flex flex-col p-6 border border-gray-700 rounded-lg shadow-xl bg-gray-800 hover:shadow-2xl transition-shadow ease-in-out duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-teal-300 mb-3">{ele.name}</h3>
                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold text-teal-400">Age:</span> {ele.age}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-semibold text-teal-400">Description:</span> {ele.description}
                        </p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => navigate(`/update-entity/${ele._id}`)}
                                className="bg-yellow-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(ele._id)}
                                className="bg-red-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Entities;
