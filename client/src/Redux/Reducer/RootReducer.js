import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./MenuItemReducer";

const reducers = combineReducers({
	allItems: productsReducer,
	Item: selectedProductsReducer,
});
export default reducers;
