import { imgUrl } from "../utils/Data";
import { Link } from "react-router-dom";
const RestarauntCard = (props) => {
    const {resname} = props;
    //console.log(resname);
    return (
      <div className="res-card w-52 h-80 text-sm bg-slate-700 m-4 p-2 rounded-md hover:border-solid hover:border-[1px] hover:border-gray-50 shadow-xl shadow-slate-700">
        <img className="RestPhoto w-[100%] h-36 rounded-md" src={imgUrl+resname.info.cloudinaryImageId} alt="Pic" />
        <h4 className="font-bold my-2"><Link className="hover:text-gray-400" to={"/restaurants/"+resname.info.id}>{resname.info.name}</Link></h4>
        <p className="text-xs my-1">{resname.info.cuisines.join(", ")}</p>
        <p className="text-xs my-1">{resname.info.avgRating} stars</p>
        <p className="text-xs my-1">{resname.info.sla.deliveryTime} minutes</p>
      </div>
    );
  };
  export default RestarauntCard;