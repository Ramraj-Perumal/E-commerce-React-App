import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
    name:'cart',
    initialState:{
        list:[],
    },
    reducers:{
        addItem: (state, {payload}) =>{
            state.list = [...state.list, {...payload, count: 1 }];
        },
        removeItem: (state, {payload})=>{
            const index = state.list.findIndex(
                (product) => product.id === payload.id
            );
            state.list = [
                ...state.list.slice(0, index),
                ...state.list.slice(index + 1),
            ];
        },
        modifyItem: (state, {payload})=>{
            const index = state.list.findIndex(
                (product) => product.id === payload.id
            );
            state.list = [
                ...state.list.slice(0, index),
                {...state.list[index], count: payload.count},
                ...state.list.slice(index + 1),
            ];
        },

    },
});

export const { addItem, removeItem, modifyItem } = Cart.actions;

export default Cart.reducer;