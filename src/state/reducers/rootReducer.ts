import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { fetchMoviesReducer } from "./fetchMoviesReducer";
import { inputReducer } from "./searchReducer";

export const rootReducer = combineReducers({
    inputReducer,
    loadingReducer,
    fetchMoviesReducer,
});
