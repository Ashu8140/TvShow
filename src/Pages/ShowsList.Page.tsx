import { FC, useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { ShowLoadedAction, showsQueryChangeAction } from "../Action/shows";
import { searchShow } from "../api";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/show";
import { showLoadingSelector, showSelector, showsQueryMapSelector } from "../Selector/shows";
import { State } from "../store";

type showsListPageProps={} & ReduxProps

const ShowListPage:FC<showsListPageProps>=({query,shows,showsQueryChange,loading})=> {
    
  return (
    <div className="mt-2">
      <div className="flex">
      <SearchBar value={query} onChange={(event)=>showsQueryChange(event.target.value)} />
        {loading && <LoadingSpinner/>}
        </div>
        <div className="flex flex-wrap justify-center">
       {shows && shows.map((s)=>(
         < ShowCard key={s.id} shows={s}></ShowCard>
         ))} 
      </div>
    </div>
  );
}

const mapStateToProps=(state:State)=>{
return{
query:showsQueryMapSelector(state),
shows:showSelector(state),
loading:showLoadingSelector(state)}
}

const mapDispatchToProps={
  showsQueryChange:showsQueryChangeAction,
}
const connector=connect(mapStateToProps, mapDispatchToProps);
type ReduxProps=ConnectedProps<typeof connector>

export default  connector(ShowListPage);
