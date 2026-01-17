import React, { useEffect, useEffectEvent, useState } from "react";
import Card from "./Card";

const ClassOneOnState = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [squareValue, SetSquareValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);
  //   let count = 0;
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const logCount = () => {
    console.log(count);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  //   console.log(count)

  useEffect(() => {
    console.log("Nandini");
  }, [count]);

  const calculateSquare = () => {
    console.log("running");
    SetSquareValue(count ** 2);
  };

  useEffect(calculateSquare, [count]);

  if (data.length > 0) {
    console.log(data[0]);
  }

  return (
    <div>
      <div className="flex gap-2 items-center">
        <button
          className="border border-black rounded-md px-2 py-2"
          onClick={increment}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          className="border border-black rounded-md px-2 py-2"
          onClick={decrement}
        >
          Decrement
        </button>
        <button onClick={logCount}>Log Count</button>
      </div>
      <input
        onChange={(e) => handleChangeText(e)}
        className="border"
        type="text"
      />
      <h1>{squareValue}</h1>
      <div className="flex flex-wrap">
        {data.map((a) => {
          return <Card imgSrc={a.thumbnail} title={a.title} />;
        })}
      </div>
    </div>
  );
};

export default ClassOneOnState;
