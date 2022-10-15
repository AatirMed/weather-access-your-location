import React from "react";

const ActiviteC = (props) => {
  //
  return (
    <React.Fragment>
      <div
        className={
          props.items.selectionné ? "activite_selection" : "activite_NO"
        }
        onClick={() => props.HandColor(props.items)}
      >
        <span>{props.items.name}</span>
        <span>{props.items.prix}</span>
      </div>
    </React.Fragment>
  );
};

export default ActiviteC;
