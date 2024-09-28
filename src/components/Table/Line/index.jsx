const Line = ({student}) =>{
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
            {student.id}
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
           {student.name}
        </th>
        <td className="px-6 py-4">
            {student.surname}
        </td>
        <td className="px-6 py-4">
            {student.dob}
        </td>
        <td className="px-6 py-4">
            {student.course}
        </td>
    </tr>
    )
}

export default Line;