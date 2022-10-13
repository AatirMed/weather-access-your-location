import React, { Fragment, useState } from "react";

const FormInput = (props) => {
  const [Todo, setTodo] = useState("");

  //input Change
  const HandChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <Fragment>
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        value={Todo}
        onChange={HandChange}
      />
      <button
        className="input-Add"
        onClick={() => {
          props.Add(Todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </Fragment>
  );
};
export default FormInput;
