import React from 'react';

function App() {

  const getRow = (row) => {
    let res = [1];
    let temp = [];
    let series = [res.slice()];

    if (row === 1) {
      return series;
    }

    res.push(1);

    series.push(res.slice());
    if (row === 2) {
      return series;
    }


    for (let i = 3; i <= row; i++) {
      temp.push(1);
      for (let j = 1; j < res.length; j++) {
        temp.push(res[j] + res[j - 1]);
      }
      temp.push(1);
      res = temp.slice();
      series.push(res.slice());
      temp = [];
    }
    return series;
  };

  return (
    <div style={{textAlign:"center",marginTop: '20vh'}}>
      <h3>Pascal's Triangle</h3>
      {getRow(5).map((row, index) => (
        <div key={index}>
            {Array.from({ length: 5 - index - 1 }, (_, i) => (
              <span key={i}>&nbsp;</span>
          ))}
          {row.map((val,ind)=>(
            <span key={ind}>{val+' '}&nbsp;</span>
          ))}
          {Array.from({ length: 5 - index - 1 }, (_, i) => (
              <span key={i}>&nbsp;</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
