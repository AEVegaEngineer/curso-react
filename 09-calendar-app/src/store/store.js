import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { uiReducer } from "../reducers/uiReducer";
import thunk from 'redux-thunk';
import { calendarReducer } from "../reducers/calendarReducer";
import { authReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

