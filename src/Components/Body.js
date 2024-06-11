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
        <div className="Body bg-slate-400 text-slate-50">
          <div className="flex ">
          <input type="text" className="w-72 text-gray-900 border-black border-[1px] ml-96 my-4 px-2 py-[4px]"></input>
          <button className="search-btn m-4 bg-slate-800 px-2 rounded-md hover:bg-slate-600">Search</button>
        <button className="filter-btn m-4 bg-slate-800 px-2 rounded-md">Filter</button>
        </div>
        <Shimmer/>
        </div>
      );
    }
    return (
      <div className="Body bg-slate-500 text-slate-50">
        <div className="flex">
          <input type="text" className=" rounded-lg w-72 text-gray-900 border-black border-[1px] ml-96 my-4 px-2 py-[4px]" onChange={
          (e)=>{
            //console.log(e.target.value+ "-----------");
            setSearchText(e.target.value);
           // console.log(SearchText);
            setfilterList(RestList.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase())));
          }
          }></input>
          <button className="m-4 bg-slate-800 px-2 rounded-md hover:bg-slate-600 " onClick={
          ()=>{
            setfilterList(RestList.filter((res)=> res.info.name.toLowerCase().includes(SearchText.toLowerCase())));
          }
        }>Search</button>
        <button className="m-4 bg-slate-800 px-2 rounded-md " onClick={
            ()=>{
              setfilterList(RestList.filter((val)=> val.info.avgRating>4));
            }
        }
        >Filter</button>
        </div> 
        <div className="flex flex-wrap w-[85%]  mx-auto justify-around" >
         {
          filterList.map((value)=> <RestarauntCard key={value.info.id} resname={value}/>)
         }
        </div>
      </div>
    );
  };
export default Body;