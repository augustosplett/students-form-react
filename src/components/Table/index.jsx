import { useState, useEffect } from 'react';
import { GetStudents } from '../../api/students';
import Pagination from './Pagination';
import Line
 from './Line';
const Table = () => {
    const[students, setStudents] = useState([]);

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalItems: 1,
        totalPages: 1 
    });

    useEffect(() => {
        const fetchStudents = async () => {
          const response = await GetStudents(); 
        //   console.log(JSON.stringify(response));
          setStudents(response.students); 
          setPagination((prev) => ({
            ...prev,
            totalItems: response.pagination.totalItems,
            totalPages: response.pagination.totalPages,
        }));
        };
    
        fetchStudents();
      }, [pagination.page]); 
    

    const handlePageChange = (newPage) => {
        setPagination((prev) => ({
            ...prev,
            page: newPage
        }));
    };

    return(
        <div className=" relative overflow-x-auto  sm:rounded-lg h-full w-3/4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Surname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date of Birth
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Course
                        </th>
                    </tr>
                </thead>
                <tbody>
                {students.length > 0 ? (
                    students.map((student) => (
                        <Line key={student.id} student={student} />
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center">No student found</td>
                    </tr>
                )}
                </tbody>
            </table>
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    )
}

export default Table;