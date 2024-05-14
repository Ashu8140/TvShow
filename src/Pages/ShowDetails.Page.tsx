import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CastCart from "../Components/CastCart";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { HiArrowSmLeft } from "react-icons/hi";
import { State } from "../store";
import { connect, ConnectedProps } from "react-redux";
import { Show } from "../models/show";
import { searchShow } from "../api";
import {  castMapSelector, showLoadingSelector, showMapSelector } from "../Selector/shows";
import {  loadShowAction } from "../Action/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
 
type ownProps={} & WithRouterProps;

type ShowDetailPageProps = 
 ReduxProps & ownProps;


const ShowDetailPage: FC<ShowDetailPageProps> = ({cast, show,loadShow, params }) => {
  console.log(cast);
  useEffect(()=>{
    loadShow(+params.showId);
      },[params.showId]);

  if(!show){
      return <LoadingSpinner/>;
}
  return (
    <div className="mt-2">
      
     <Link className="flex items-center text-xl" to="/"><HiArrowSmLeft/>Back</Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
      {show.genres.map(Genere=><GenrePill name={Genere} key={Genere}/>)}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || "https://thumbs.dreamstime.com/b/hand-specialist-inserts-security-lock-fee-electronic-concept-85418261.jpg"}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p dangerouslySetInnerHTML={ {__html: show.summary || ""}}></p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCart
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div> 
    </div>
  );
};
const mapStateToProps=(state:State,ownProps:ownProps)=>{
  // console.log(params.shows);
  return{
  show:showMapSelector(state)[+ownProps.params.showId], 
  cast:castMapSelector(state),
  loading:showLoadingSelector(state),
  }
  
}
const mapDispatchToProps={
 loadShow:loadShowAction,
} 
const connector=connect(mapStateToProps,mapDispatchToProps);
type ReduxProps=ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));