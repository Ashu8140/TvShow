import { loadShowDetail, searchShow } from "../api";
import {call,put} from 'redux-saga/effects';
import { Action } from "../Action";
import {  loadedCastAction, showLoadedAction, ShowLoadedAction } from "../Action/shows";
import { createStructuredSelector } from "reselect";

function* fetchShow(action:Action):Generator<any,any,any>{
 const shows=yield call(searchShow,action.payload);
 
 yield put(ShowLoadedAction(shows.map((items:any)=>items.show))) ;  
}
export default fetchShow;

export function* fetchShowDetail(action:Action):Generator<any,any,any>{
    const shows=yield call(loadShowDetail,action.payload)
    yield put(showLoadedAction(shows)) ;  
}
export function* fetchShowCast(action:Action):Generator<any,any,any>{
    const cast=yield call(searchShow,action.payload);
    console.log(cast);
     yield put(loadedCastAction(cast.map((items:any)=>items.cast))) ;  
 }
