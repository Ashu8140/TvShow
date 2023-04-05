import axios from "axios"
import { Show } from "./models/show";

export const searchShow=async(keyword:any)=>{
    const response=await axios.get<{show:Show}[]>("https://api.tvmaze.com/search/shows?q="+ keyword);
   const shows=response.data.map((item:any)=>item.show);
   const castPromise=[];
    for(let i=0;i<shows.length;i++){
        castPromise.push(getCast(shows[i]));
    
    }
   return Promise.all(castPromise);

   }

  export const getCast= async(show:Show)=>{
    const castPromise=await axios.get("https://api.tvmaze.com/shows/"+ show.id +"/cast");
        const cast=castPromise.data.map((items:any)=>items.person);
          return {show,cast};
  } 

export const  loadShowDetail=async(showId:number)=>{
const response=await axios.get("https://api.tvmaze.com/shows/"+ showId);
return response.data;
}

// export const loadShowCast=async(castId:number)=>{
//     const response=await axios.get("https://api.tvmaze.com/shows/"+ castId +"/cast");
//      return response.data.map((item:any)=>item.person);
// }