import { FC } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/show";
type showCardProps={
   shows:Show;

}
const placeholderImage="https://www.jotform.com/blog/wp-content/uploads/2015/10/pexels-photo.jpg";


const ShowCard:FC<showCardProps>=({shows})=> {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={shows.image?.medium || shows.image?.orignal || placeholderImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{shows.name}</h2>
          <p>
           {shows.summary}
          </p>
        </div>
        <Link
          to={"/show/"+ shows.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;