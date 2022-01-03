import {
	SET_ITEM,
	ADD_TO_CART,
	REMOVE_ITEM,
	CLEAR_CART,
	INCREMENT,
	DECREMENT,
} from "../Constant/Action-Types";

export const setProducts = (items) => {
	return {
		type: SET_ITEM,
		payload: items,
	};
};

// to add the product into cart
export const addToCart = (item) => {
	return { type: ADD_TO_CART, payload: item };
};

// to delete the indv. elements from an Item Cart
export const removeItem = (id) => {
	return { type: REMOVE_ITEM, payload: id };
};

// clear the cart
export const clearCart = () => {
	return { type: CLEAR_CART };
};

// increment the item
export const increment = (id) => {
	return {
		type: INCREMENT,
		payload: id,
	};
};

// decrement the item
export const decrement = (id) => {
	return {
		type: DECREMENT,
		payload: id,
	};
};
