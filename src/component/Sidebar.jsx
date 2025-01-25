import { useNavigate } from 'react-router-dom'
import { auth,  } from '../firbase.jsx';
import { signOut } from 'firebase/auth';

export default function Sidebar() {
    const navigate=useNavigate();
    const handleLogout = async () => {
      await signOut(auth);
      navigate('/');
    };
  return (
    <div><aside className="w-64 bg-gray-800 text-white h-screen p-4 ">
    <h2 className="text-lg font-bold mb-6">Dashboard</h2>
    <button
      onClick={() => navigate("/students")}
      className="mb-4 block text-left w-full cursor-pointer"
    >
      Students
    </button>
    <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
  </aside></div>
  )
}
