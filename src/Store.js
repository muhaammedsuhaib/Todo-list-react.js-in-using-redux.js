import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Todo/Reducer";


const store = configureStore({
    reducer:{
        todo: Reducer,
        

    }
})
export default store;