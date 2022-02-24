import { SET_LOADING_OFF, SET_LOADING_ON } from "../types/types";

const initialState = {
    loading: true,
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
        case SET_LOADING_ON:
            return {
                ...state,
                loading: true,
            };
        case SET_LOADING_OFF:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
