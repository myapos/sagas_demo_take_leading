import Button from "./components/Button/Button";
import DisplayData from "./DisplayData";
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
        text="Click me to fetch data from star wars api with param 1"
        id="dummyBtn_1"
        queryParam="1"
      />
      <Button
        text="Click me to fetch data from star wars api with param 2"
        id="dummyBtn_2"
        queryParam="2"
      />
      <DisplayData />
    </div>
  );
}

export default App;
