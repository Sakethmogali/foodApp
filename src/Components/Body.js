import RestarauntCard from "./RestCard";
import {restData} from "../utils/Data";
import { useState } from "react";
const Body = () => {
    const [statelist,setstatelist] = useState(restData);
    return (
      <div className="Body">
        <input type="text"></input>
        <button className="search-btn" >Search</button>
        <button className="filter-btn" onClick={
            ()=>{
                setstatelist(statelist.filter((val)=> val.info.avgRating>4));
            }
        }
        >Filter</button>
        <div className="Rest-cont">
         {
          statelist.map((value)=> <RestarauntCard resname={value}/>
          )
         }
        </div>
      </div>
    );
  };
export default Body;