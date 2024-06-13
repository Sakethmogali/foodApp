import { useState } from "react";
import AccordianBody from "./AccordianBody";
export const Item=(props)=>{
    const {data}=props;
    const [showAccordianBody,setshowAccordianBody] =useState(false);
    //console.log(data);
    return (
        <div className=" w-[88%] mx-auto bg-slate-800 p-4 m-2 my-4 shadow-lg shadow-slate-900"> 
            <div className="flex justify-between font-semibold"onClick={
            ()=>
                {
                    setshowAccordianBody(!showAccordianBody)
                }
            }>
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
export const NestedItem =(props)=>{
    const {data}=props;
    //console.log(data);
    return (
        <div className=" w-[88%] mx-auto bg-slate-800 p-4 m-2 my-4 shadow-lg shadow-slate-900">
          <span className="font-semibold">{data.title}</span>                  
        {data.categories.map((val)=>{
            return (
                <SubItem data={val}></SubItem>
            );
        })}
    </div>
    );
};

const SubItem=(props)=>{
    const {data}=props;
    const [showAccordianBody,setshowAccordianBody] =useState(false);
    return (
        <div className="my-2 border-b-[2px] border-gray-100 "  onClick={
            ()=>
                {
                    setshowAccordianBody(!showAccordianBody)
                }
            }>
            <div className="flex justify-between text-sm my-2">
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