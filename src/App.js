import Button from "./components/Button/Button";
import DisplayData from "./DisplayData";
import "./App.css";

function App() {
  const listOfParams = ["1", "2"];

  return (
    <div
      className="App"
      style={{
        margin: "0 auto",
      }}
    >
      {listOfParams.map((param) => (
        <Button
          text={`Click me with param ${param}`}
          id={`dummyBtn_${param}`}
          queryParam={`${param}`}
        />
      ))}
      <DisplayData />
    </div>
  );
}

export default App;
