import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import './InputForm.css'

const InputFrom = () => {
  const dispatch = useDispatch();
  const [one, setone] = React.useState({ id: nanoid(), name: "", ville: "" });
  const store = useSelector((state) => state);

  //   HandChange 'one'
  const HandChange = (event) => {
    const newlist = { ...one };
    newlist[event.target.getAttribute("name")] = event.target.value;
    setone(newlist);
  };

  // add
  const Add = () => {
    dispatch({ type: "add", val: one }, [one]);
    dispatch({ type: "monter", val: { monter: false, btn: "add" } });
  };

  //Edit
  const edit = () => {
    const newlist1 = [...store.arr];
    newlist1.map((ele) => {
      if (ele.id === store.edit_id) {
        ele.name = one.name;
        ele.ville = one.ville;
      }
      return'ok';
    });
    dispatch({ type: "edit", val: newlist1 });
    dispatch({ type: "monter", val: { monter: false, btn: "add" } });
  };

  //   edit && add
  const f = () => {
    if (store.isMonter.btn === "edit") {
      edit();
      dispatch({type:'disable',val:false});
    } else if (store.isMonter.btn === "add") {
      Add();
    }
  };

  return (
    <div className="inZ">
      <span>Name : <input
      autoComplete="off"
        type="text"
        name="name"
        onChange={HandChange}
      ></input></span>
      
      <br />
      <br />
      <span> ville : <input
      autoComplete="off"
        type="text"
        name="ville"
        onChange={HandChange}
      ></input></span>
      
      <br />
      <br />
      <button onClick={f}>{store.isMonter.btn}</button>
    </div>
  );
};
export default InputFrom;
