import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Actions.css";

const Actions = (props) => {
  const dispatch = useDispatch();
  let [active, setBtnState] = useState();

  const firstNumber = useSelector((state) => state.firstNumber);
  const secondNumber = useSelector((state) => state.secondNumber);

  const clickActionHandler = (e) => {
    setBtnState((active = !active));
    setTimeout(() => {
      setBtnState((active = !active));
    }, 300);

    if (firstNumber === "" || secondNumber === "") {
      console.log("not valid!");
      return false;
    }

    dispatch({ type: e.target.id });
  };

  return (
    <button
      className={`${
        active
          ? "btn btn-success custom-btn-active"
          : "btn btn-success custom-btn"
      }`}
      id={props.id}
      onClick={clickActionHandler}
    >
      {props.actionName}
    </button>
  );
};

export default Actions;
