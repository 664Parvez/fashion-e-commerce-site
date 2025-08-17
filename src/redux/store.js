import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/features/products/productSlice"
import WishlistReducer from "./features/wishlist/wishlistSlice"

const store = configureStore ({
    reducer: {
        product: ProductReducer,
        wishlist: WishlistReducer
    }
})

export default store