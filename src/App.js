import React from "react";
import Header from "./components/Header";
import Chart from "./components/Chart";
import data from "./data";

function App() {
  return (
    <main className="App">
      <div className="container">
        <Header />
        <Chart data={data} />
      </div>
    </main>
  );
}

export default App;
