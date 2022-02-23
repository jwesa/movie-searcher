import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
