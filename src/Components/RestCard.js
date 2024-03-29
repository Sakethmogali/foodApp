import { imgUrl } from "../utils/Data";
const RestarauntCard = (props) => {
    const {resname} = props;
    return (
      <div className="res-card">
        <img className="RestPhoto" src={imgUrl+resname.info.cloudinaryImageId} alt="Pic" />
        <h4>{resname.info.name}</h4>
        <h4 className="fsize">{resname.info.cuisines.join(", ")}</h4>
        <p className="fsize">{resname.info.avgRating} stars</p>
        <p className="fsize">{resname.info.sla.deliveryTime} minutes</p>
      </div>
    );
  };
  export default RestarauntCard;