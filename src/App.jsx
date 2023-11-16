import { Tldraw, createShapeId } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useCallback } from "react";

export default function App() {
  const handleMount = (editor) => {
    const id = createShapeId("hello");

    editor.createShapes([
      {
        id,
        type: "geo",
        x: 128 + Math.random() * 500,
        y: 128 + Math.random() * 500,
        props: {
          geo: "rectangle",
          w: 100,
          h: 100,
          dash: "draw",
          color: "blue",
          size: "m",
        },
      },
    ]);
  };

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
