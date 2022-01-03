import {
	SET_ITEM,
	ADD_TO_CART,
	REMOVE_ITEM,
	CLEAR_CART,
	INCREMENT,
	DECREMENT,
} from "../Constant/Action-Types";
import { toast } from "react-toastify";
import MenuItems from "../../components/MenuItems";

const intialState = {
	List: MenuItems,
};

export const productsReducer = (state = intialState, action) => {
	switch (action.type) {
		case SET_ITEM:
			return { ...state, List: action.payload };

		default:
			return state;
	}
};

export const selectedProductsReducer = (
	state = {
		cart: [],
	},
	action
) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const checkProductExists = state.cart?.find(
				(e) => e.id === action.payload.id
			);

			if (checkProductExists) {
				toast.error("Item is already present in cart!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				return {
					cart: [...state.cart],
				};
			}

			toast.success("Item added to cart!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});

			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		}

		case REMOVE_ITEM: {
			toast.success("Item removed from cart!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return {
				...state,
				cart: [...state.cart.filter((item) => item.id !== action.payload)],
			};
		}

		case INCREMENT: {
			const updatedCart = state.cart.map((curElem) => {
				if (curElem.id === action.payload) {
					return { ...curElem, quantity: curElem.quantity + 1 };
				}
				return curElem;
			});

			return { ...state, cart: updatedCart };
		}

		case DECREMENT: {
			const updatedCart = state.cart.map((curElem) => {
				if (curElem.id === action.payload) {
					return { ...curElem, quantity: curElem.quantity - 1 };
				}
				return curElem;
			});

			return { ...state, cart: updatedCart };
		}

		case CLEAR_CART: {
			toast.success("Your Cart is Empty Now!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return { cart: [] };
		}

		default:
			return state;
	}
};
