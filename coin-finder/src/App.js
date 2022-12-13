import { useState, useEffect } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(name);
    const url = `https://api.coingecko.com/api/v3/coins/${name}`;
    fetch(url).then((response) =>
      response.json().then((data) => setData(data))
    );
  }, [name]);

  return (
    <div className="App">
      <Title text="Coin Finder" />
      <Entry action={setName} />
      <h5>[enter a coin above]</h5>
      <Info name={name} data={data} />
      <footer>
        (c) 2022,
        <a href="https://codesandbox.io/s/le-coin-finder-b19q0l?file=/src/App.js">
          Click here to go to codesandbox
        </a>
        ~ Owen Hunger, Evan Yu, Evan Steinhoff
      </footer>
    </div>
  );
}
