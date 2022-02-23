import { combineReducers } from "redux";
import { inputReducer } from "./searchReducer";

export const rootReducer = combineReducers({
    inputReducer,
});
