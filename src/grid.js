import React, {useState} from 'react';

const columns = [...Array(32).keys()];

const Grid = ({tonesTotal}) => {
  const [active, setActive] = useState([]);
  const [bpm, setBpm] = useState(120);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleStepClick = e => {
    if (active.includes(e.target.value)) {
      active.pop(e.target.value);
    } else {
      active.push(e.target.value);
    }
    console.log(active);
  };

  let colsInFrame = null;

  const selected = {
    height: '20px',
    width: '20px',
    backgroundColor: 'red',
  };
  const deselected = {
    height: '20px',
    width: '20px',
    backgroundColor: 'blue',
  };

  return (
    <div style={{backgroundColor: 'black'}}>
      <table style={{margin: 'auto'}}>
        <tbody>
          {tonesTotal.map((tone, index) => {
            return (
              <tr>
                <td style={{color: 'white'}}>{tone}</td>
                {columns.map((column, i) => {
                  return (
                    <td>
                      <button
                        onClick={e => {
                          handleStepClick(e);
                        }}
                        value={`${tone}.${i}`}
                        style={
                          active.includes(`${tone}.${i}`)
                            ? selected
                            : deselected
                        }
                      />
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
