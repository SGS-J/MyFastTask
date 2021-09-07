import { Draggable } from "react-beautiful-dnd";
import React, { useRef, useState } from "react";

export default function TaskCard({ title, description }) {
  const nodeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleStart = (e) => {};
  const handleStop = (e) => {};

  return (
    <Draggable>
      {(provided) => {
        <div ref={nodeRef} className="handle">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>;
      }}
    </Draggable>
  );
}
