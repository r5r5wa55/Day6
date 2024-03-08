import {configureStore} from '@reduxjs/toolkit'
import movieSlice from './reducer.js'

export default configureStore({
    reducer:{
        movie:movieSlice
    }
})