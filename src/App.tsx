import { useState } from "react";
import { Phase0Page } from "./pages/Phase0Page";
import { Phase1Page } from "./pages/Phase1Page";
import { Phase2Page } from "./pages/Phase2Page";

function App() {
  const [path, setPath] = useState("Phase1Page");

  let component;
  if (path === "Phase0Page") {
    component = <Phase0Page />;
  } else if (path === "Phase1Page") {
    component = <Phase1Page />;
  } else if (path === "Phase2Page") {
    component = <Phase2Page />;
  }

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
        <button onClick={() => setPath("Phase0Page")}>Phase0 Page</button>
        <button onClick={() => setPath("Phase1Page")}>Phase1 Page</button>
        <button onClick={() => setPath("Phase2Page")}>Phase2 Page</button>
      </nav>

      <div style={{ border: "solid 2px gainsboro", width: "500px", height: "500px", marginTop: "20px" }}> {component}</div>
    </div>
  );
}

export default App;
