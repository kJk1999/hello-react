import { RES_IMG } from "../utils/constants";

const RestaurentCard = (props)=>{
    console.log(props)
    const eachResData = props.resData
   
    
      return(
        <li className="res-card">
          <img className="food-image" alt="restarent Image" src={`${RES_IMG}${eachResData.info.cloudinaryImageId}`}/>
          <p>
            {eachResData.info.name}
          </p>
          <p>{eachResData.info.locality}</p>
          <p>{eachResData.info.cuisines.join(", ")}</p>
          <p>{eachResData.info.avgRating} Stars</p>
    
    
        </li>
      )
    
    }

    export default RestaurentCard