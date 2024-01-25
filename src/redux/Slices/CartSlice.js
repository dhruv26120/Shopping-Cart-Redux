import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);//input parameter is action.payload
        },
        remove:(state,action) => {
            //retain item that is diffent from action.payload
            return state.filter((item)=> item.id !==action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;