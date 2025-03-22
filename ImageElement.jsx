import React, { useState } from 'react';

const ImageElement = ({ element, isSelected, setSelectedElement, updateElement }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - element.x,
      y: e.clientY - element.y,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateElement(element.id, {
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`image-element ${isSelected ? 'selected' : ''}`}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 1, // Ensure images appear below text
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={() => setSelectedElement(element.id)}
    >
      <img
        src={element.src}
        alt="uploaded"
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default ImageElement;