import { createSlice } from '@reduxjs/toolkit';


const shortString = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
]




export const urlSlice = createSlice({
    name: "url",
    initialState: {
        urls: {}
    },
    reducers: {
        storeUrls: (state, value) => {
            console.log("payload", value.payload, Math.floor(Math.random()*10), shortString[Math.floor(Math.random()*10)]);
            if(!state.urls[value.payload]){
                console.log("no key found", state.urls[value.payload])
                state.urls[value.payload] = shortString[Math.floor(Math.random()*10)];
            }
            return state;
        },
        // getUrls: (state) => {
        //     console.log(state)
        //     return state;
        // }
    }
})


export const { storeUrls, getUrls } = urlSlice.actions;