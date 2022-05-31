import { SET_LOADING_OFF, SET_LOADING_ON } from "../actions/actionTypes";
import { loadingStateInterface } from '../../interfaces/stateInterfaces';
import { loadingActionInterface } from '../../interfaces/actionInterfaces';

const initialState: loadingStateInterface = {
    loading: true,
};

export const loadingReducer = (state = initialState, action: loadingActionInterface) => {
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
