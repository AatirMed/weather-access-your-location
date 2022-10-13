import React, { useState } from "react";

//nanoid
import { nanoid } from "nanoid";

//Component
import AddTodo from "./component/List/AddTodo";
import FormInput from "./component/Form/FormInput";

//Css
import "./App.css";

const App = () => {
  //data
  const [data, setData] = useState([
    { id: 1, todo: "Setup development environment", check: true },
    { id: 2, todo: "Develop website and add content", check: false },
    { id: 3, todo: "XDeploy to live server", check: false },
  ]);

  //Add
  const Add = (Todo) =>Todo!==""?setData([...data, { id: nanoid(), todo: Todo, check: false }]):null;
    

  //delete
  const remove = (id) => setData([...data.filter((ele) => ele.id !== id)]);

  //checked
  const checke = (id) => {
    data.map((ele) => {
      if (ele.id === id && ele.check === false) {
        ele.check = true;
      } else if (ele.id === id && ele.check === true) {
        ele.check = false;
      }
      return "ok";
    });
    setData([...data]);
  };

  return (
    <div className="main">
      <div className="header">
        <h2>Simple Todo App</h2>
      </div>

      <div className="input-two">
        <FormInput Add={Add} />
      </div>
      <div>
        <AddTodo data={data} remove={remove} checke={checke}/>
      </div>
    </div>
  );
};

export default App;
