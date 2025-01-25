import  { useState, useEffect } from 'react';

import {  db } from '../firbase.jsx';

import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';


const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({});


  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'students'));
    setStudents(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  const handleAddStudent = async () => {
    await addDoc(collection(db, 'students'), newStudent);
    setIsModalOpen(false);
    fetchStudents();
  };

  

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="flex">

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <button className="mb-4" onClick={() => setIsModalOpen(true)}>Add Student</button>
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded">
              <h2 className="text-xl font-bold mb-4">Add Student</h2>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Class"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, class: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Section"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, section: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Roll Number"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      rollNumber: e.target.value,
                    })
                  }
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, dob: e.target.value })
                  }
                />
                <select
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, gender: e.target.value })
                  }
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, Stream: e.target.value })
                  }
                >
                  <option value="">Science</option>
                  <option value="Male">Commerce</option>
                  <option value="Female">Arts</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Parent/Guardian Name"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      parentName: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Additional Notes"
                  className="border mb-2 p-2 w-full"
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, notes: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleAddStudent}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

<table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Class</th>
              <th className="border border-gray-300 p-2">Section</th>
              <th className="border border-gray-300 p-2">Roll Number</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{student.name}</td>
                <td className="border border-gray-300 p-2">{student.class}</td>
                <td className="border border-gray-300 p-2">{student.section}</td>
                <td className="border border-gray-300 p-2">{student.rollNumber}</td>
                <td className="border border-gray-300 p-2 flex justify-around">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded"
                    onClick={() => alert(`Viewing student: ${student.name}`)}
                  >
                    View
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                    onClick={() => alert(`Editing student: ${student.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      
    </div>
  );
};

export default StudentTable;
