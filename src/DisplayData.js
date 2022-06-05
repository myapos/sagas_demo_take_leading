import React from "react";
import { useSelector } from "react-redux";
import { getData, getFetching } from "./callsSlice";

function DisplayData(props) {
  const data = useSelector(getData);
  const fetching = useSelector(getFetching);

  const styles = {
    background: "black",
    color: "yellow",
    width: "50%",
    margin: "0 auto",
    borderRadius: "5px",
    marginTop: "10px",
    padding: "10px",
  };
  return (
    <div>
      {fetching ? (
        "...fetching"
      ) : (
        <pre style={styles}>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default DisplayData;
