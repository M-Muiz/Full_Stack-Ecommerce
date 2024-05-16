import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IProduct {
    id: string
    title: string
    price: number
    description: string
    img: string
    quantity: number
};

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((prod) => prod.id === action.payload.id) === -1) {
                state.push(action.payload)
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<String>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id)
        }
    }

});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
