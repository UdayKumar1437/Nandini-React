import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setcount] = useState(0);
  const [countOne, setCountOne] = useState(0);
  useEffect(() => {
    console.log("Testing");
  }, [countOne]);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setcount(count - 1)}>Decrement</button>

      <h1>{countOne}</h1>
      <button onClick={() => setCountOne(countOne + 1)}>
        Increment countOne
      </button>
    </div>
  );
};

export default Test;
