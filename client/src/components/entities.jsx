import { useState, useEffect } from "react";
import axios from 'axios'
function Entities() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3010/users/user')
        setData(response.data)
        console.log(response)
    }

    useEffect(() => {
        const callhandler = async () => {
            await fetchData()
        }
        callhandler()
    }, [])

    return (
        <div className="p-8 font-sans bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8 text-center shadow-lg">User Entities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data?.map((ele, index) => {
                        return (
                            <div key={index} className="flex flex-col p-6 border border-gray-700 rounded-lg shadow-xl bg-gray-800 hover:shadow-2xl transition-shadow ease-in-out duration-300">
                                <h3 className="text-2xl font-semibold text-teal-300 mb-3">{ele.name}</h3>
                                <p className="text-gray-300 mb-2">
                                    <span className="font-semibold text-teal-400">Age:</span> {ele.age}
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-teal-400">Description:</span> {ele.description}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
    
    
}

export default Entities;