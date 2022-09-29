
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    val:0
}

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers:{}
})

const {} = rootSlice.actions;
export default rootSlice.reducer;