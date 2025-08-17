import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist item",
    initialState: {
        data: []
    },
    reducers: {
        addWishlist: (state, action) => {
            state.data.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id)
        }
    }
})


export const { addWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer