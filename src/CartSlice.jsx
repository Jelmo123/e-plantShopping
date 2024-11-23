import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0,
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        let existingItem = state.items.find(item => item.name === action.payload.name)
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({...action.payload, quantity: 1});
        }
        state.count++;
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.name !== action.payload.name);
        state.count -= action.payload.quantity;
    },
    updateQuantity: (state, action) => {
        let existingItem = state.items.find(item => item.name === action.payload.name)
        if (existingItem) {
            state.count -= existingItem.quantity;
            existingItem.quantity = action.payload.quantity;
            state.count += existingItem.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
