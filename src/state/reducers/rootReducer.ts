import { combineReducers } from '@reduxjs/toolkit'

import carrosselReducer from './carrosselReducer'

const rootReducer = combineReducers({
    carrossel: carrosselReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer