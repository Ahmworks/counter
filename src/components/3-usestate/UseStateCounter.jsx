// import React from 'react'
import { useState } from "react";
const UseStateCounter = () => {
  //   const [counter, setCounter] = React.useState(0);
  //? useState hook'u ile counter adinda bir state tanimladik.
  const [counter, setCounter] = useState(0);

  //? counter state'nin degerini setCounter metodu ile bir arttırdik
  const handleInc = () => setCounter(counter + 1);
  //? state'in önceki halini setter metodu içinden yakalayabiliriz
  //   const handleInc = () => setCounter((prevState)=>prevState + 1);

  return (
    <div>
      <h2>UseStateCounter</h2>
      <h3>Count: {counter} </h3>
      <button onClick={handleInc} className="btn btn-primary">
        Artır
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-warning">
        Sıfırla
      </button>

      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>
    </div>
  );
};

export default UseStateCounter;
