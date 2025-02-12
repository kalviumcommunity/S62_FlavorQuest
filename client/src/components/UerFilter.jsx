import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserFilter({ onSelect}) {
    const [users,setUsers]=useState([])

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3010/users/user");
            setUsers(response.data);
        } catch (err) {
            
            console.error("Error fetching users:", err);
        }
    };

    useEffect(()=>{
        fetchUsers()
    },[])
    const handleUserChange = (e) => {
        const userId=e.target.value
        if (userId=='') {
            onSelect(null)
        } else {
            const selectedUser=users.find(user=>user._id===userId)
            onSelect(selectedUser||null)
        }
    };

    return (
        <div className="text-center mb-8">
            <select
                onChange={handleUserChange}
                className="bg-teal-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
            >
                <option value="">Select a User</option>
                {users.map(user => (
                    <option key={user._id} value={user._id}>{user.name}</option>
                ))}
            </select>
        </div>
    );
}

export default UserFilter;

// adz