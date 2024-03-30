import RestarauntCard from "./RestCard";
import {restData} from "../utils/Data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [RestList,setRestList] = useState([]);
    const [SearchText,setSearchText] = useState("");
    const [filterList,setfilterList] = useState([]);
    useEffect(()=>{
      loadData();
    },[]);

    const loadData = async ()=>{
      const resp= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");  
      const rdata = await resp.json();
     setRestList(rdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setfilterList(rdata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    if(RestList.length === 0) 
    {
      return (
        <div className="Body">
          <input type="text" className="inp-search"></input>
        <button className="search-btn" >Search</button>
        <Shimmer/>
        </div>
      );
    }
    return (
      <div className="Body">
        <input type="text" className="inp-search" onChange={
          (e)=>{
            setSearchText(e.target.value);
            setfilterList(RestList.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase())));
          }
        }></input>
        <button className="search-btn" onClick={
          ()=>{
            setfilterList(RestList.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase())));
          }
        }>Search</button>
        <button className="filter-btn" onClick={
            ()=>{
              setfilterList(RestList.filter((val)=> val.info.avgRating>4));
            }
        }
        >Filter</button>
        <div className="Rest-cont">
         {
          filterList.map((value)=> <RestarauntCard key={value.info.id} resname={value}/>
          )
         }
        </div>
      </div>
    );
  };
export default Body;