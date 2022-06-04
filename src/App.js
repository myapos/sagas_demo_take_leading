import Button from "./components/Button/Button";
import { NUM_OF_CALLS } from "./constants";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Button text={`Click me to try ${NUM_OF_CALLS} actions`} id="dummyBtn" />
    </div>
  );
}

export default App;
