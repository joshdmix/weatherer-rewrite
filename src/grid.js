import React from 'react';
// import { useTable } from 'react-table';

// const Table = () => {
//   const {getTableProps} = useTable({
//     columns: [...Array(16).keys()],
//     rows: [...Array(88).keys()],
//   });
// };
//
const columns = [...Array(16).keys()];
const rows = [...Array(88).keys()];

const Grid = () => {
  return (
    <table>
      <tbody>
        {rows.map((row, i) => {
          return (
            <tr>
              {columns.map((column, i) => {
                return <td>x{row[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
