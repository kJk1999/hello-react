import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [listOfRestaurents,setListOfRestaurents] = useState([])
  const [filterdRestaurent,setFilteredRstaurent] = useState([])
  const [serachedRestaurent,setSearchedRestaurent] = useState("")
 

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4384197&lng=78.3668122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json);
    setListOfRestaurents(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRstaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  if(listOfRestaurents?.length === 0){
    return <div>Loading...</div>
  }

  
    
    return (
      <div>
        <div>
         <input onChange={(e)=>{
            setSearchedRestaurent(e.target.value)
         }} value={serachedRestaurent}/>
         <button onClick={()=>{
          
              let filteredRestaurents = listOfRestaurents.filter((restro)=>{
              return restro.info.name.toLowerCase().includes(serachedRestaurent.toLowerCase())
          })
          console.log(filteredRestaurents)
          setFilteredRstaurent(filteredRestaurents)
         }}>Search</button>
        </div>
        <div className="res-container">
          <ul className="res-list">
          {filterdRestaurent.map((restaurant)=> <RestaurentCard key ={restaurant.info.id} resData ={restaurant}/>)}
          </ul>
        </div>
      </div>
    );
  };

  export default Body