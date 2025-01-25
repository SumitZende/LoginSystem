import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Student from "./Pages/Student";



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/students' element={<Student/>}/>
      </Routes>
    </div>
  )
}
