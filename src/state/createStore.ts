import { configureStore } from "@reduxjs/toolkit"
import rootReducer, { RootState } from './reducers/rootReducer'
import { TypedUseSelectorHook, useSelector } from "react-redux"

const preloadedState: RootState = {
    carrossel:
    {
        current: "star"
    }
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    preloadedState
})

export default store
