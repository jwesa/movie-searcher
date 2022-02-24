import { SEARCH_MOVIE } from "../types/types";
import { inputActionInterface } from './../../interfaces/actionInterfaces';
import { inputInterface } from "./../../interfaces/stateInterfaces";

const initialState: inputInterface = {
    text: "",
};

export const inputReducer = (state = initialState, action: inputActionInterface) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }
};
