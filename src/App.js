import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card path={process.env.PUBLIC_URL + 'cards/hakos-baelz.webp'} name="Hakos Baelz"/>
    </div>
  );
}

export default App;
