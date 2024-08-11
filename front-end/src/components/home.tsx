// Home.tsx
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('user');
        navigate('/'); // นำทางไปที่หน้า Login (หน้าเริ่มต้น)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">Welcome to Home</h2>
                <button
                    type="button"
                    className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
