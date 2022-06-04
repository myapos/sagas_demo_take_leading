import React from "react";
import { useSelector } from "react-redux";
import { getData, getFetching } from "./callsSlice";

function DisplayData(props) {
  const data = useSelector(getData);
  const fetching = useSelector(getFetching);
  return (
    <div>
      {fetching ? "...fetching" : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default DisplayData;
