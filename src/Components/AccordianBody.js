import { imgUrl } from "../utils/Data";
export default AccordianBody = (props)=>{
    const {data}=props;
    console.log(data);
    return ( 
        <div>
            {data.itemCards.map((item)=>{
                return (<div className="my-4  h-40 py-3 flex justify-between border-b-2 border-y-gray-100">
                    <div className="mx-2 text-sm">
                    <p >{item.card.info.name}</p>
                    <p className="text-xs font-semibold">{"₹ "+ (item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</p>
                    </div>
                    <img src={imgUrl+item.card.info.imageId} className="h-[90%] w-[200px] mx-2">
                    </img>
                   
                    
                </div>);
            })}
        </div>
    )
}