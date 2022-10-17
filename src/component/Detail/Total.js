import React, { Fragment } from "react";

const Total = (props) => {
  return (
    <Fragment>
      <span className="end">Total : {props.total}</span>
    </Fragment>
  );
};

export default Total;
