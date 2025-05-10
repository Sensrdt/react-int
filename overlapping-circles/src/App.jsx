import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [listOfCircles, setListOfCircles] = useState([]);
  const [circleIndex, setCircleIndex] = useState(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const id = e.button;
    setCircleIndex(id);

    setListOfCircles((prev) => {
      const filtered = prev.filter((c) => c.id !== id);
      const exists = prev.some((c) => c.id === id);
      if (exists) return filtered;
      return [
        ...filtered,
        {
          id,
          startX: e.clientX,
          startY: e.clientY,
          currentX: e.clientX,
          currentY: e.clientY,
          color: "red", // default color
        },
      ];
    });
  };

  const handleOnMouseMove = (e) => {
    if (circleIndex !== null) {
      setListOfCircles((prev) =>
        prev.map((c) =>
          c.id === circleIndex
            ? {
                ...c,
                currentX: e.clientX,
                currentY: e.clientY,
              }
            : c,
        ),
      );
    }
  };

  const handleOnMouseUp = () => {
    const lastDraggedId = circleIndex;
    setCircleIndex(null);
    handleIntersection(lastDraggedId);
  };

  useEffect(() => {
    // Remove handleIntersection from here — we call it explicitly in handleOnMouseUp
  }, [circleIndex]);

  useEffect(() => {
    if (circleIndex === null) {
      handleIntersection();
    }
  }, [circleIndex]);

  const handleIntersection = (lastDraggedId) => {
    if (listOfCircles.length < 2) return;

    const leftCircle = listOfCircles.find((c) => c.id === 0);
    const rightCircle = listOfCircles.find((c) => c.id === 2);

    if (!leftCircle || !rightCircle) return;

    const getCenter = (circle) => ({
      x: (circle.startX + circle.currentX) / 2,
      y: (circle.startY + circle.currentY) / 2,
    });

    const getRadius = (circle) =>
      Math.min(
        Math.abs(circle.currentX - circle.startX),
        Math.abs(circle.currentY - circle.startY),
      ) / 2;

    const center1 = getCenter(leftCircle);
    const center2 = getCenter(rightCircle);
    const r1 = getRadius(leftCircle);
    const r2 = getRadius(rightCircle);

    const dx = center1.x - center2.x;
    const dy = center1.y - center2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const intersects = distance <= r1 + r2;
    console.log("Intersection:", intersects);

    // Only update the last drawn circle's color
    setListOfCircles((prev) =>
      prev.map((c) =>
        c.id === lastDraggedId
          ? {
              ...c,
              color: intersects ? "green" : "red",
            }
          : c,
      ),
    );
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        border: "1px solid white",
        position: "absolute",
        top: "10px",
        bottom: "10px",
        right: "10px",
        left: "10px",
      }}
    >
      {listOfCircles.map((circle) => {
        const left = Math.min(circle.startX, circle.currentX);
        const top = Math.min(circle.startY, circle.currentY);
        const width = Math.abs(circle.currentX - circle.startX);
        const height = Math.abs(circle.currentY - circle.startY);

        return (
          <div
            key={circle.id}
            style={{
              position: "absolute",
              backgroundColor: circle.color || "red",
              top: `${top}px`,
              left: `${left}px`,
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          >
            {circle.id}
          </div>
        );
      })}
    </div>
  );
}

export default App;
