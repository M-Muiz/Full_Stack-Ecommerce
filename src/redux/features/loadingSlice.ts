import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Boolean = false;

export const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<Boolean>) => {
            return action.payload
        }
    }
});


export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer