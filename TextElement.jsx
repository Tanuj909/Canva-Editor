import React, { useState } from 'react';

const TextElement = ({ element, isSelected, setSelectedElement, updateElement }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(element.text);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (!isEditing) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - element.x,
        y: e.clientY - element.y,
      });
      e.preventDefault();
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (isDragging) {
      updateElement(element.id, {
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  // Handle mouse up for dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle double-click to enable editing
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // Handle input change for text editing
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Save the text and disable editing
  const handleInputBlur = () => {
    updateElement(element.id, { text });
    setIsEditing(false);
  };

  // Handle Enter key to save the text
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      updateElement(element.id, { text });
      setIsEditing(false);
    }
  };

  // Apply styles to the text
  const textStyle = {
    fontSize: `${element.fontSize}px`,
    color: element.color,
    fontFamily: element.fontFamily || 'Arial',
    fontWeight: element.bold ? 'bold' : 'normal',
    fontStyle: element.italic ? 'italic' : 'normal',
    textDecoration: element.underline ? 'underline' : 'none',
  };

  return (
    <div
      id={`text-element ${isSelected ? 'selected' : ''}`}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 2, // Ensure text appears above images
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={handleDoubleClick}
      onClick={() => setSelectedElement(element.id)}
    >
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          style={{ ...textStyle, width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent' }}
          autoFocus
        />
      ) : (
        <div style={{ ...textStyle, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {element.text}
        </div>
      )}
    </div>
  );
};

export default TextElement;