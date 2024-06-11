import { useEffect,useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import star from "../../Images/star.png"
import {Item,NestedItem} from "./Accordian"
const RestaurantMenu = ()=>{
    const [restData,setrestData]=useState(null); 
    const {restID}= useParams(); 
   // console.log(restID);
const FetchData = async ()=>
{
        const APIdata= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+restID+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const jsondata = await APIdata.json();
    //    console.log(jsondata?.data?.cards);
        setrestData(jsondata?.data);
};
const heading = "|----------------- MENU -----------------|"
useEffect(()=>{
    FetchData();
},[]); 
 if(restData === null) return <Shimmer/>;
 else{
    const {name,avgRating,costForTwoMessage,totalRatingsString}= restData?.cards[2]?.card?.card?.info;
    const menuData=restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    //console.log(menuData);
    const itemsList = menuData.filter((item)=>{
        return item.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || item.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    })
    //console.log(itemsList);
    let pr;
    return (
        <div className="w-[60%] bg-slate-400 mx-auto text-slate-50 p-3">
            <div className="m-2 text-sm">
                <h2 className="font-extrabold py-2 text-4xl">{name}</h2>
                <div className="flex font-bold items-center text-xs my-4">
                <img className="w-4 h-4 mx-1" src={star}></img>
                <label>{avgRating+"("+totalRatingsString+")"}</label>
                <span className="mx-2">{"  - "+ costForTwoMessage}</span>
                </div>
            </div>
            <div className="my-8">
                <h1 className="text-center my-4">{heading}</h1>
                <div className="m-2">
                   {  pr=itemsList.map((val)=>{
                    console.log(val);
                    //   if(val.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                    //   {
                    //     return <Item data={val.card.card} key={val.card.card.restID}/>;
                    //   }
                    //   else{
                    //     return (<div className="flex justify-between w-[88%] mx-auto bg-slate-800 p-4 m-2 shadow-lg shadow-slate-600 font-semibold"> 
                    //     <span>{val.card.card.title}</span>
                    // </div>);
                    if(val.card.card.categories)
                        {
                            return (
                             <NestedItem data={val.card.card} key={val.card.card.restID}/>
                            );
                        }
                        else{  
                           return  <Item data={val.card.card} key={val.card.card.restID}/>  
                        }
                   })
                   }
                </div>
            </div>
        </div>
    );
 }
};
export default RestaurantMenu;