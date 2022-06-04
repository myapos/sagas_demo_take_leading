import Button from "./components/Button/Button";
import { NUM_OF_CALLS } from "./constants";

import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: "0 auto",
      }}
    >
      <Button
        text={`Click me to try ${NUM_OF_CALLS} actions with queryParam 1`}
        id="dummyBtn"
        queryParam="1"
      />
      <Button
        text={`Click me to try ${NUM_OF_CALLS} actions with queryParam 2`}
        id="dummyBtn"
        queryParam="2"
      />
    </div>
  );
}

export default App;
