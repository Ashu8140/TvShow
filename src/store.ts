import { applyMiddleware, combineReducers, createStore, StoreEnhancer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery, takeLatest } from "redux-saga/effects";
import { ACTION_QUERY_CHANGE,  LOAD_CAST_ACTION, LOAD_SHOW_ACTION } from "./Action/shows";
import showsReducer from "./Reducer/shows";
import fetchShow, { fetchShowCast, fetchShowDetail } from "./sagas/show";

 const reducer=combineReducers({
    shows:showsReducer,
   });
   
 function* rootSaga( ){
  yield debounce(300,ACTION_QUERY_CHANGE,fetchShow);
  yield takeEvery(LOAD_SHOW_ACTION,fetchShowDetail);
  yield takeEvery(LOAD_CAST_ACTION,fetchShowCast);
   
 }
 const sagaMiddleware=createSagaMiddleware();
 
 const store=createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
 export type State = ReturnType<typeof reducer>;
sagaMiddleware.run(rootSaga);

 export default store;








 //store