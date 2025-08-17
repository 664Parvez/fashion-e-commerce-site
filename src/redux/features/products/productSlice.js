import { createSlice, current } from "@reduxjs/toolkit";

const saveToLocalStorage = (data) => {
    localStorage.setItem("product", JSON.stringify(data))
}

const productSlice = createSlice({
    name: "products",
    initialState: {
        // data: []
        data: JSON.parse(localStorage.getItem("product")) || []
    },
    reducers: {
        addCart: (state, action) => {
            const data = state.data.find((item) => item.id === action.payload.id)
            if (data) {
                data.quantity += 1
            } else {
                state.data.push(action.payload)
            }

            saveToLocalStorage(state.data)
        },
        increaseQty: (state, action) => {
            const qtyIncData = state.data.find((item) => item.id === action.payload.id)
            if (qtyIncData) {
                qtyIncData.quantity += 1
            }

            saveToLocalStorage(state.data)
        },
        decreaseQty: (state, action) => {
            const qtyDecData = state.data.find((item) => item.id === action.payload.id)
            if (qtyDecData) {
                qtyDecData.quantity -= 1
            }
            if (qtyDecData.quantity < 1) {
                state.data = state.data.filter((item) => item.id !== action.payload.id)
            }
            saveToLocalStorage(state.data)
        },
        removeProductFromCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id)

            saveToLocalStorage(state.data) 
        },
        emptyCart: (state, action) => {
            state.data = []
            saveToLocalStorage(state.data)
        }
    }
})

export const {addCart, increaseQty, decreaseQty, removeProductFromCart, emptyCart} = productSlice.actions
export default productSlice.reducer