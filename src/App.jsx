import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useCallback } from "react";

export default function App() {
  const handleMount = useCallback((app) => {}, []);
  return (
    <div
      style={{
        position: "relative",
        width: "1000px",
        height: "1000px",
      }}
    >
      <Tldraw onMount={handleMount} />
    </div>
  );
}
