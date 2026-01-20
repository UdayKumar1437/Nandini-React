import React, { use, useEffect, useState } from "react";

const Carts = () => {
  const [data, setData] = useState([]);
  const [flatData, setFlatData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => setData(res.carts));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // console.log(data)
      const ans = data.flatMap((a) => a.products);
      setFlatData(ans);
    }
  }, [data]);

  console.log(flatData);

  return (
    <div>
      {/* {data.map((cart) => {
        const products = cart.products;
        return (
          <div>
            {products.map((a) => {
              return <h1>{a.title}</h1>;
            })}
          </div>
        );
      })} */}

      {flatData.map((d) => {
        return <h1 key={d.id}>{d.title}</h1>;
      })}
    </div>
  );
};

export default Carts;
