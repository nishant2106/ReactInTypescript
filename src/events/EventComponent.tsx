import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.screenY);
  };
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me
      </div>
    </div>
  );
};

export default EventComponent;
