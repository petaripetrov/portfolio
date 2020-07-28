import { createSlice, PayloadAction} from "@reduxjs/toolkit"

export type carrosselState = {
    current: "star" | "id-badge" | "list-alt" | "link"
}

let initialState: carrosselState = {
    current: "star"
}

const carrosselSlice = createSlice({
    name: 'carrossel',
    initialState,
    reducers: {
        update(state, action: PayloadAction<carrosselState>) {
            state.current = action.payload
        }
    }
})

export const {
    update
} = carrosselSlice.actions

export default carrosselSlice.reducer