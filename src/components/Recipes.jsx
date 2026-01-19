import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => setData(res.recipes));
  }, []);
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((nandini) => {
        return <RecipeCard img={nandini.image} rating={nandini.rating} name={nandini.name}  uday={nandini.cuisine} />;
      })} 
    </div>
  );
};

export default Recipes;
