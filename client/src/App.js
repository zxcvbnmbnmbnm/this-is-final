import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="App">
      {data.map((obj, ind) => (
        <div key={ind}>
          Name : {obj.name} <br />
          {obj.roll}

          <br/>
          <br/>
        </div>
      ))}

      <button
        onClick={() => {
          let starttime = Date.now()
          fetch("/dataa")
            .then((res) => res.json())
            .then((res) => {
              setData(res)
              console.log(Date.now() - starttime);
              console.log("newwwww");
            });

        }}
      >
        add data
      </button>
    </div>
  );
}

export default App;
