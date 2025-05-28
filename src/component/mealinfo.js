import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setinfo] = useState(null);

  useEffect(() => {
    const getinfo = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await res.json();
        setinfo(jsonData.meals[0]);
        console.log(jsonData.meals[0]);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    if (mealid) {
      getinfo(); // only fetch when mealid is present
    }
  }, [mealid]); // only re-run if mealid changes

  return (
    <div>
      {!info ? "Data not found" : (
        <div className='mealInfo'>
          <img src={info.strMealThumb} alt={info.strMeal} />
          <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};
