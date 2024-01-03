import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Example/Examples.jsx";
import Header from "./components/Header/Header.jsx";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
