import NavBar from "../../components/NavBar";
import { useState } from 'react';
import { AddStudent } from "../../api/students";

//{name: string; surname: string; dob: datetime; course: string; } (all fileds are required)
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
                <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="surname" value={student.surname} onChange={handleChange} placeholder="Surname" required />
                <input type="date" name="dob" value={student.dob} onChange={handleChange} required />
                <input type="text" name="course" value={student.course} onChange={handleChange} placeholder="Course" required />
                <button type="submit">Add Student</button>
            </form>
            {error && <p>Error: {error}</p>}
            {successMessage && <p>{successMessage}</p>}
        </div>
        </>
    );
}


export default CreateStudent;