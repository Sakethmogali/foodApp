import { useState } from "react";
import AccordianBody from "./AccordianBody";
export const Item=(props)=>{
    const {data}=props;
    const [showAccordianBody,setshowAccordianBody] =useState(false);
    console.log(data);
    return (
        <div className=" w-[90%] mx-auto bg-slate-800 p-4 m-2 my-4 shadow-lg shadow-slate-900" onClick={
            ()=>
                {
                    setshowAccordianBody(!showAccordianBody)
                }
            }>
            <div className="flex justify-between font-semibold">
              <span>{data.title}</span><span>🔽</span>                  
            </div>
            <div>
                {   
                   showAccordianBody && <AccordianBody data={data} key={data.title}/>
                }
            </div>
        </div>
    );
};
// export const NestedItem =(props)=>{

// };

