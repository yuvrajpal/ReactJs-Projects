// 1. Import Library
import React from "react";
import ReacrDOM from "react-dom/client";

// 2. Get root element
const el = document.getElementById("root");

// 3. Give control to React
const root = ReacrDOM.createRoot(el);

// 4. Create App component
function App() {
  let mesasge = "Bye there!";
  if (Math.random() > 0.5) {
    mesasge = "Hello there!";
  }
  return <h1>{mesasge}</h1>;
}

// 5. Show App component on the screen
root.render(<App />);
