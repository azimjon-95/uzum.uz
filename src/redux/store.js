import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './index/counter'

export default configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})
