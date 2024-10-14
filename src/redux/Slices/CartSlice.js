import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            // Check if item already exists in the cart
            const itemIndex = state.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // If item already exists, just increase its quantity
                state[itemIndex].quantity += 1;
            } else {
                // If item doesn't exist, add it to the cart with an initial quantity of 1
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.find((item) => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

export const { add, remove, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
