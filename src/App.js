import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import {configureStore} from "@reduxjs/toolkit";
import { urlSlice } from './store/urlStore';
import { storeUrls, getUrls } from "./store/urlStore";

const store = configureStore({
  reducer: urlSlice.reducer
})

// store.getState();
// store.dispatch(storeUrls("test"));
 
// console.log("state from redux", store.getState());

function App() {

const [urlInput, setUrlInput] = useState('');
const handleInput = (e) => {
  // console.log(e.target.value);
  setUrlInput(e.target.value);
}

const handleGenerate = () => {
  // console.log("generate random");
  store.dispatch(storeUrls(urlInput));
}

const urls = store.getState().urls;

console.log("urls", urls);


  return (
    <div className="App">
      <form>
        <input type="text" value={urlInput} onChange={handleInput} />
        <button onClick={handleGenerate}>Generate</button>
      </form>
    </div>
  );
}

export default App;
