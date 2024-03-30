import RestarauntCard from "./RestCard";
import {restData} from "../utils/Data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [RestList,setRestList] = useState([]);

    useEffect(()=>{
      loadData();
    },[]);

    const loadData = async ()=>{
      const resp= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  
      const rdata = await resp.json();
      console.log(rdata);
     setRestList(rdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
   
    if(RestList.length === 0) 
    {
      return (
        <div className="Body">
          <input type="text"></input>
        <button className="search-btn" >Search</button>
        <Shimmer/>
        </div>
      );
    }
    return (
      <div className="Body">
        <input type="text"></input>
        <button className="search-btn" >Search</button>
        <button className="filter-btn" onClick={
            ()=>{
                setRestList(RestList.filter((val)=> val.info.avgRating>4));
            }
        }
        >Filter</button>
        <div className="Rest-cont">
         {
          RestList.map((value)=> <RestarauntCard key={value.info.id} resname={value}/>
          )
         }
        </div>
      </div>
    );
  };
export default Body;