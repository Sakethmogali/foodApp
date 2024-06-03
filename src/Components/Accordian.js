import { useState } from "react";
import AccordianBody from "./AccordianBody";
export const Item=(props)=>{
    const {data}=props;
    const [showAccordianBody,setshowAccordianBody] =useState(false);
    return (
        <div className=" w-[86%] mx-auto bg-slate-800 p-4 m-2 my-4 shadow-lg shadow-slate-900" >
            <div className="flex justify-between">
              <span>{data.title}</span><span>🔽</span>                  
            </div>
            <div>
                {   
                   showAccordianBody && <AccordianBody data={data}/>
                }
            </div>
        </div>
    );
};
export const NestedItem =(props)=>{

};

