import {
	FETCH_MOVIES,
	SEARCH_MOVIE,
    SET_LOADING_ON,
    SET_LOADING_OFF,
} from "./actionTypes";
import { Dispatch } from "redux";

export function fetchMovies(API: string) {

    return async (dispatch: Dispatch) => {
        try {
            dispatch(setLoadingOn());
            const response = await fetch(API);
            const jsonData = await response.json();
            dispatch({
                type: FETCH_MOVIES,
                data: jsonData.results,
            });
            dispatch(setLoadingOff());
        } catch (err) {
            console.log("Error occured: ", err);
            dispatch(setLoadingOff());
        }
    };
}

export function searchMovie(text: string) {
    return {
        type: SEARCH_MOVIE,
        text,
    };
}

export function setLoadingOn() {
    return {
        type: SET_LOADING_ON,
    };
}

export function setLoadingOff() {
    return {
        type: SET_LOADING_OFF,
    };
}
