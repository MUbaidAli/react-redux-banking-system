import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducers = combineReducers({ accountReducer, customerReducer });

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
