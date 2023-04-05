import { ActionCreator } from ".";
import { Show } from "../models/show";

export const SHOW_LOADED="SHOW_LOADED";

export const ShowLoadedAction:ActionCreator<Show[]>=(shows:Show[])=>({
    type: "SHOW_LOADED",
    payload: shows
});

export const ACTION_QUERY_CHANGE="ACTION_QUERY_CHANGE";

export const showsQueryChangeAction:ActionCreator<string>=(query:string)=>({
    type: "ACTION_QUERY_CHANGE",
    payload: query,
}); 

export const SHOW_DETAIL_ACTION="SHOW_DETAIL_ACTION";

export const showLoadedAction:ActionCreator<Show>=(show:Show)=>({
    type: "SHOW_DETAIL_ACTION",
    payload: show,
});
 export const LOAD_SHOW_ACTION="LOAD_SHOW_ACTION";
 
 export const loadShowAction:ActionCreator<number>=(id:number)=>({
     type: "LOAD_SHOW_ACTION",
     payload: id,
 });

 export const LOAD_CAST_ACTION="LOAD_CAST_ACTION";
 


 export const LOADED_CAST_ACTION="LOADED_CAST_ACTION";
 
 export const loadedCastAction:ActionCreator<Show>=(show:Show)=>({
     type: "LOADED_CAST_ACTION",
     payload: show,
 });


 
