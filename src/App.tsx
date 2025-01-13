import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import USMap from "./USMap";

function App() {

  return (
    <main>
      <h1>US Bridge Failures Map</h1>
      <USMap />
    </main>
  );
}

export default App;
