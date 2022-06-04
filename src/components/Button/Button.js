import React from "react";
import { useDispatch } from "react-redux";
import { startBunchOfCalls } from "../../counterSlice";

function Button({ text, dummyBtn }) {
  const dispatch = useDispatch();
  return (
    <button
      id={dummyBtn}
      onClick={() => {
        console.log("clicked");
        dispatch(startBunchOfCalls());
      }}
    >
      {text}
    </button>
  );
}

export default Button;
