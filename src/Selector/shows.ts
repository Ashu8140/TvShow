import { createSelector } from "reselect";
import { State } from "../store";

export const showStateSelector = (state: State) => state.shows;

export const showsQueryMapSelector = createSelector(showStateSelector,
    (showsState) => showsState.query);

export const showMapSelector = createSelector(showStateSelector,
    (showsState) => showsState.shows);

export const castMapSelector = createSelector(showStateSelector,
    (showsState) => showsState.shows);

export const queryShowMapSelector = createSelector(showStateSelector,
    (showsState) => showsState.query_shows);

export const showLoadingSelector=createSelector(showStateSelector,
        (showLoading)=>showLoading.loading)



export const showSelector = createSelector(
    showMapSelector,
    showsQueryMapSelector,
    queryShowMapSelector,
    (showsMap, query, queryShowsMap) => queryShowsMap[query] && queryShowsMap[query].map((showId) =>showsMap[showId])
);     