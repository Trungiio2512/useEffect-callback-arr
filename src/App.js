import "./styles.css";

import CallbackArr from "./callbackArr.js";

import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setState(!state)}>Open</button>
      {state && <CallbackArr />}
    </div>
  );
}
