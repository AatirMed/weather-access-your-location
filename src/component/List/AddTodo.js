import React, { Fragment } from "react";
import { nanoid } from "nanoid";

const AddTodo = (props) => {
  return (
    <Fragment>
      {props.data.map((ele) => {
        return (
          <div key={nanoid()} className='one-list'>
            <input type="checkbox" defaultChecked={ele.check?'checked':null} onChange={() => props.checke(ele.id)} />
            <span className={ele.check ? "check" : "no_check"}>{ele.todo}</span>
            <button className="btn-style" onClick={() => props.remove(ele.id)}>X</button>
          </div>
        );
      })}
    </Fragment>
  );
};
export default AddTodo;
