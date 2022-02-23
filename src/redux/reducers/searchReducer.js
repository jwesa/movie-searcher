import { SEARCH_MOVIE } from "../types/types";

const initialState = {
    text: "",
};

export const inputReducer = (state = initialState, action) => {
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
