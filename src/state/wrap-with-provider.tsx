import React from "react"
import { Provider } from 'react-redux'

import store from './createStore'

export default ({element}: any) => {
    
    return <Provider store={store}>{element}</Provider>
}