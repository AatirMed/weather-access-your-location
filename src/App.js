import { useSelector } from "react-redux";
import React from "react";

// Component
import Show from "./component/Table/Show";
import InputFromAdd from "./component/InputForm/InputFromAdd";
import InputFromEdit from "./component/InputForm/InputFromEdit";

//css
import "./Css/App.css";

const App = () => {
  const store = useSelector((state) => state);
  return (
    <div className="main">
      {store.isMonter ? <InputFromAdd /> : <InputFromEdit />}
      <div className="show">
        <Show />
      </div>
    </div>
  );
};

export default App;
