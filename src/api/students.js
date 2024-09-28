import axios from 'axios';

const api = 'https://api.barcelos.dev/lasalle-student/';

const GetStudents = async () => {
    try {
        const response = await axios.get(api);
        return response.data; 
    } catch (error) {
        console.error(error); 
        return { error: error.message }; 
    }
};

const AddStudent = async (student) => {
    try {
        const response = await axios.post(api, student);
        return response.data; 
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
};

export  { GetStudents, AddStudent };