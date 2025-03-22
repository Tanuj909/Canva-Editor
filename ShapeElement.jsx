import React, { useState } from 'react';

const ShapeElement = ({ element, isSelected, setSelectedElement, updateElement }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState(null); // 'top-left', 'top-right', 'bottom-left', 'bottom-right'

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('resize-handle')) {
      // Start resizing
      setIsResizing(true);
      setResizeHandle(e.target.dataset.handle);
    } else {
      // Start dragging
      setIsDragging(true);
      setStartPos({
        x: e.clientX - element.x,
        y: e.clientY - element.y,
      });
    }
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // Update position while dragging
      updateElement(element.id, {
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    } else if (isResizing) {
      // Update size while resizing
      const deltaX = e.clientX - element.x;
      const deltaY = e.clientY - element.y;

      let newWidth = element.width;
      let newHeight = element.height;

      switch (resizeHandle) {
        case 'bottom-right':
          newWidth = deltaX;
          newHeight = deltaY;
          break;
        case 'bottom-left':
          newWidth = element.width - deltaX;
          newHeight = deltaY;
          updateElement(element.id, { x: e.clientX });
          break;
        case 'top-right':
          newWidth = deltaX;
          newHeight = element.height - deltaY;
          updateElement(element.id, { y: e.clientY });
          break;
        case 'top-left':
          newWidth = element.width - deltaX;
          newHeight = element.height - deltaY;
          updateElement(element.id, { x: e.clientX, y: e.clientY });
          break;
        default:
          break;
      }

      updateElement(element.id, { width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle(null);
  };

  // Render the shape based on its type
  const renderShape = () => {
    switch (element.shapeType) {
      case 'rectangle':
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              border: `2px solid ${element.color}`,
              backgroundColor: 'transparent', // Hollow shape
            }}
          />
        );
      case 'circle':
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              border: `2px solid ${element.color}`,
              borderRadius: '50%',
              backgroundColor: 'transparent', // Hollow shape
            }}
          />
        );
      case 'line':
        return (
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: element.color,
              transform: 'rotate(45deg)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`shape-element ${isSelected ? 'selected' : ''}`}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        position: 'absolute',
        cursor: isDragging || isResizing ? 'grabbing' : 'grab',
        zIndex: 1, // Ensure shapes appear below text
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={() => setSelectedElement(element.id)}
    >
      {renderShape()}

      {/* Resize handles */}
      {isSelected && (
        <>
          <div
            className="resize-handle"
            data-handle="top-left"
            style={{
              position: 'absolute',
              top: -5,
              left: -5,
              width: 10,
              height: 10,
              backgroundColor: 'blue',
              cursor: 'nwse-resize',
            }}
          />
          <div
            className="resize-handle"
            data-handle="top-right"
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              width: 10,
              height: 10,
              backgroundColor: 'blue',
              cursor: 'nesw-resize',
            }}
          />
          <div
            className="resize-handle"
            data-handle="bottom-left"
            style={{
              position: 'absolute',
              bottom: -5,
              left: -5,
              width: 10,
              height: 10,
              backgroundColor: 'blue',
              cursor: 'nesw-resize',
            }}
          />
          <div
            className="resize-handle"
            data-handle="bottom-right"
            style={{
              position: 'absolute',
              bottom: -5,
              right: -5,
              width: 10,
              height: 10,
              backgroundColor: 'blue',
              cursor: 'nwse-resize',
            }}
          />
        </>
      )}
    </div>
  );
};

export default ShapeElement;