import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEntities() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", age: "", description: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/users/user`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3010/users/${id}`, user);
            navigate("/entities");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="p-8 font-sans bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen flex justify-center">
            <form
                onSubmit={handleUpdate}
                className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full"
            >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Update User</h2>
                <div className="mb-4">
                    <label className="text-teal-400 font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-teal-400 font-semibold">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-teal-400 font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={user.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all duration-200 w-full"
                >
                    Update
                </button>
            </form>
        </div>
    );
}

export default UpdateEntities;
