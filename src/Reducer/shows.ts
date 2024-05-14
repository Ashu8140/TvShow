import { schema } from "normalizr";
import { AnyAction } from 'redux';
import { ACTION_QUERY_CHANGE, LOADED_CAST_ACTION, SHOW_DETAIL_ACTION, SHOW_LOADED } from "../Action/shows";
import {Show} from "../models/show";
import {normalize} from "normalizr";
import { produce } from "immer";


export type State={
    shows:{[showId:number]:Show};
    query_shows:{[query:string]:number[]};
    query_loading:{[showId:string]:boolean};
    loading:boolean;
    query:string;
};
export const initialState:State={
    shows:{},
    query_shows:{},
    query_loading:{}, 
    loading:false,
    query:"",

};
    
function showsReducer(state=initialState,action:AnyAction):State{
    switch(action.type){
     case SHOW_LOADED:
     return produce(state,(draft:any)=>{
        const shows=action.payload as Show[];

     if(!shows || shows.length===0){
    return;
      }
        const showSchema= new schema.Entity("shows");
        const normalizer=normalize(shows,[showSchema]);
        draft.loading=false; 

        draft.query_shows[draft.query]=normalizer.result;
    draft.shows={...draft.shows, ...normalizer.entities.shows } 

     });   
     case ACTION_QUERY_CHANGE:
     return produce(state,(draft:any)=>{
       draft.query=action.payload;
       
        draft.loading=true;
      
     });
     case SHOW_DETAIL_ACTION:
     return produce(state,(draft:any)=>{
        const show=action.payload as Show;
        
      draft.shows[show.id]=show;
     });
     case LOADED_CAST_ACTION:
     return produce(state,(draft:any)=>{
      const cast=action.payload;
      draft.shows[cast.id]=cast;
     });

     
     
        default:
            return state;
    }
}
export default showsReducer;
