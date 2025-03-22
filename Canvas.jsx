import React, { forwardRef } from 'react';
import ImageElement from './ImageElement';
import TextElement from './TextElement';
import ShapeElement from './ShapeElement';

const Canvas = forwardRef(
  (
    { elements, selectedElement, setSelectedElement, updateElement, canvasSize },
    ref
  ) => {
    // Sort elements to ensure text appears on top of images and shapes
    const sortedElements = [...elements].sort((a, b) => {
      if (a.type === 'text' && (b.type === 'image' || b.type === 'shape')) return 1; // Text comes after images and shapes
      if ((a.type === 'image' || a.type === 'shape') && b.type === 'text') return -1; // Images and shapes come before text
      return 0; // No change in order
    });

    return (
      <div
        className="canvas"
        ref={ref}
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          position: 'relative',
          border: '1px solid #ccc',
        }}
      >
        {sortedElements.map((element) =>
          element.type === 'image' ? (
            <ImageElement
              key={element.id}
              element={element}
              isSelected={element.id === selectedElement}
              setSelectedElement={setSelectedElement}
              updateElement={updateElement}
            />
          ) : element.type === 'text' ? (
            <TextElement
              key={element.id}
              element={element}
              isSelected={element.id === selectedElement}
              setSelectedElement={setSelectedElement}
              updateElement={updateElement}
            />
          ) : (
            <ShapeElement
              key={element.id}
              element={element}
              isSelected={element.id === selectedElement}
              setSelectedElement={setSelectedElement}
              updateElement={updateElement}
            />
          )
        )}
      </div>
    );
  }
);

export default Canvas;