import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import Show from "./C1/Show";
import InputFrom from "./C1/InputForm";
import './App.css'

function App() {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

const add_p =()=>{
    dispatch({type:'monter',val:{monter:'true',btn:'add'}})
}

  return (
    <div className="parent">
    <div className="btn">
    <button disabled={store.disable} onClick={add_p}>+</button>
    </div>
      <Show />
      {store.isMonter.monter ? <InputFrom/> : null}

    </div>
  );
}
export default App;
