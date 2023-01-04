//React
import { useState } from "react";
//Components
import ColorChecker from "./components/ColorChecker";
import SearchColor from "./components/SearchColor";

function App() {
  const [color, setColor] = useState("");

  const styles = {
    color: color,
  };

  return (
    <div className="App">
      <h1 style={styles}>Test Your Hex</h1>
      <ColorChecker color={color} />
      <SearchColor setColor={setColor} color={color} />
    </div>
  );
}

export default App;
