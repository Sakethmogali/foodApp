export default AccordianBody = (props)=>{
    const {data}=props;
    console.log(data);
    return ( 
        <div>
            {data.itemCards.map((item)=>{
                return (<div className="my-4 border-2 border-gray-50 h-48 py-3">
                    <h2 >{item.card.info.name}</h2>
                    <p>{"₹ "+ (item.card.info.price?item.card.info.price:item.card.info.defaultPrice)/100}</p>
                    
                </div>);
            })}
        </div>
    )
}