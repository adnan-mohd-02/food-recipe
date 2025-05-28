// Mainpage.js
import React, { useState } from 'react';
import Mealcard from './mealcard';

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search.trim() === "") {
      setmsg("Please enter a dish name.");
      return;
    }
    setLoading(true);
    try {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await get.json();
      setData(jsonData.meals);
      if (!jsonData.meals) setmsg("No results found.");
      else setmsg("");
    } catch (error) {
      setmsg("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className='container'>
    <h1 className='head'>🍽️ Food Recipe Finder</h1>
      <div className='searchBar'>
        <input type='text' placeholder='Search your dish...' onChange={handleInput} />
        <button onClick={myFun}>Search</button>
      </div>
      <h3 className='msg'>{msg}</h3>
      {loading && <h3 className='loading'>Loading...</h3>}
      <div>
        <Mealcard detail={data} />
      </div>
    </div>
  );
};

export default Mainpage;
