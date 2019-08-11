import React from 'react';
// import { useTable } from 'react-table';

// const Table = () => {
//   const {getTableProps} = useTable({
//     columns: [...Array(16).keys()],
//     rows: [...Array(88).keys()],
//   });
// };
//
const columns = [...Array(32).keys()];
const rows = [...Array(24).keys()];

const Grid = ({tonesTotal}) => {
  console.log(tonesTotal);
  return (
    <div style={{backgroundColor: 'black'}}>
      <table style={{margin: 'auto'}}>
        <tbody>
          {tonesTotal.map((tone, i) => {
            return (
              <tr>
		      <td style={{color: "white"}}>{tone}</td>
                {columns.map((column, i) => {
                  return (
                    <td>
			    <button style={{backgroundColor: 'blue', height: "20px", width: "20px"}}></button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
