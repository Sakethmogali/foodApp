import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});
// console.log(CartSlice.action);
export default CartSlice.reducer;
export const {addItem,removeItem,clearCart} = CartSlice.actions;
