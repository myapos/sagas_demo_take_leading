import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCall, getQueries } from "../../callsSlice";

function Button({ text, dummyBtn, queryParam, onClick }) {
  const dispatch = useDispatch();

  const queries = useSelector(getQueries);

  return (
    <button
      style={{ marginLeft: "5px", width: "100px" }}
      id={dummyBtn}
      onClick={() => {
        dispatch(
          handleCall({
            value: queryParam,
            called: queries[queryParam] ? queries[queryParam].called : false,
            fetching: true,
          })
        );
      }}
    >
      {text}
    </button>
  );
}

export default Button;
