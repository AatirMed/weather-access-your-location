import React from "react";
import ActiviteC from "./ActiviteC";

const Activite = (props) => {
  const HandColor = (obj) => props.t(obj);

  return (
    <React.Fragment>
      {props.data.map((ele) => (
        <ActiviteC key={ele.id} items={ele} HandColor={HandColor} />
      ))}
    </React.Fragment>
  );
};

export default Activite;
