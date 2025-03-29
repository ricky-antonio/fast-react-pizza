import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = id
            state.cart = state.cart.filter(
                (item) => item.cart.id !== action.payload,
            );
        },
        increaseItemQty(state, action) {
            // payload = id
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQty(state, action) {
            // payload = id
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    deleteItem,
    increaseItemQty,
    decreaseItemQty,
    clearCart,
} = cartSlice.actions;

export const getTotalCartQty = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartCost = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export default cartSlice.reducer;
