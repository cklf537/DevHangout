import { createSlice } from "@reduxjs/toolkit";
import { MENU } from "../store/menu";

const initialState = MENU;

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        addMenu:(state, action)=>{
            if(action.payload){
               state.menu = [...state.menu, action.payload]
             }
            }
        },
        removeMenu:(state, action)=>{
            if(action.payload){
                state.menu = action.payload
            }
         }
    }
);

export const {addMenu, removeMenu} = menuSlice.actions;
export default menuSlice.reducer;
