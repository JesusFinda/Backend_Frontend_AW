type Props = {
  columns: string[];
  data?: any;
};

export const Table = ({ columns }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            {columns.map((item, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <p>Edit</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b  hover:bg-gray-50 ">
            {columns.map((item, idx) => (
              <td key={idx} className="px-6 py-4">
                {item}
              </td>
            ))}
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
