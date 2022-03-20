import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Calculator.css";
import Layout from "../UI/Layout";
import Actions from "./Actions";

const Calculator = (props) => {
  const dispatch = useDispatch();

  const firstNumber = useSelector((state) => state.firstNumber);
  const secondNumber = useSelector((state) => state.secondNumber);
  const result = useSelector((state) => state.result);
  const actionType = useSelector((state) => state.actionType);

  const actionsPerformedCount = useSelector(
    (state) => state.actionsPerformedCount
  );

  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  const firstNumberChangeHandler = (e) => {
    dispatch({
      type: "firstNumber",
      firstNumberChange: Number(e.target.value),
    });
  };

  const secondNumberChangeHandler = (e) => {
    dispatch({
      type: "secondNumber",
      secondNumberChange: Number(e.target.value),
    });
  };

  const actions = [
    {
      id: "add",
      actionName: "+",
    },
    {
      id: "subtract",
      actionName: "-",
    },
    {
      id: "multiply",
      actionName: "*",
    },
    {
      id: "division",
      actionName: "/",
    },
  ];

  return (
    <>
      <Layout>
        <h3 className="mb-4">
          Total operations performed: {actionsPerformedCount}
        </h3>
        <div className="card">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <input
              type="number"
              className="form-control mr-2"
              placeholder="Eg: 1"
              value={firstNumber}
              onChange={firstNumberChangeHandler}
            />
            {actionType === "" ? "+" : actionType}
            <input
              type="number"
              className="form-control ml-2"
              placeholder="Eg: 2"
              value={secondNumber}
              onChange={secondNumberChangeHandler}
            />
          </div>
          <div className="actions">
            {actions.map((item) => {
              return (
                <Actions
                  key={item.id}
                  id={item.id}
                  actionName={item.actionName}
                />
              );
            })}
          </div>
          <div className="reset-btn d-flex justify-content-between align-items-center">
            <button onClick={resetHandler} className="btn btn-danger">
              Reset
            </button>
            {actionsPerformedCount > 0 && (
              <h3 className="text-success">Result: {result}</h3>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Calculator;
