import NavBar from "../../components/NavBar";
import { useState } from 'react';
import { AddStudent } from "../../api/students";

const CreateStudent = () => {
    const [student, setStudent] = useState({ name: '', surname: '', dob: '', course: '' });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        student.name = student.name.trim();
        student.surname = student.surname.trim();
        student.course = student.course.trim();
        const result = await AddStudent(student);
        if (result.error) {
            setError(result.error);
            setSuccessMessage('');
        } else {
            setSuccessMessage('Student added successfully!');
            setError(null);
            setStudent({ name: '', surname: '', dob: '', course: '' }); // Reset the form
        }
    };

    return (
        <>
        <NavBar/>

      
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                    <input 
                        type="text" 
                        pattern="[A-Za-z]+" 
                        title="Only letters are allowed"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        id="name" 
                        name="name" 
                        value={student.name} 
                        onChange={handleChange} required />

                </div>
                <div>
                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Surname</label>
                    <input 
                        type="text" 
                        pattern="[A-Za-z]+" 
                        title="Only letters are allowed"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="surname" 
                        value={student.surname} 
                        onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Date of Birth</label>
                    <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="dob" value={student.dob} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Course</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="course" value={student.course} onChange={handleChange} required />
                </div>
                <br />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Add Student</button>
            </form>
            {error && <p>Error: {error}</p>}
            {successMessage && <p>{successMessage}</p>}
        </div>
        </>
    );
}


export default CreateStudent;