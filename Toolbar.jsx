import React, { useState } from 'react';

const Toolbar = ({
  selectedElement,
  elements,
  updateElement,
  addImage,
  addText,
  addShape,
  removeElement,
  resizeCanvas,
  setShowTemplates,
}) => {
  const selected = elements.find((element) => element.id === selectedElement);
  const [showResizeButtons, setShowResizeButtons] = useState(false); // State to toggle resize buttons

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        addImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="toolbar">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={addText}>Add Text</button>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('line')}>Add Line</button>
      <button onClick={() => setShowTemplates(true)}>Templates</button>

      {/* Button to toggle resize buttons */}
      <button onClick={() => setShowResizeButtons(!showResizeButtons)}>
        {showResizeButtons ? 'Hide Resize Options' : 'Show Resize Options'}
      </button>

      {/* Resize Buttons (conditionally rendered) */}
      {showResizeButtons && (
        <>
          <button onClick={() => resizeCanvas(200, 200)}>200x200</button>
          <button onClick={() => resizeCanvas(500, 500)}>500x500</button>
          <button onClick={() => resizeCanvas(800, 600)}>800x600</button>
          <button onClick={() => resizeCanvas(800, 1000)}>800x1000</button>
        </>
      )}

      {selected && (
        <div className="controls">
          {selected.type === 'text' && (
            <>
              <input
                type="color"
                value={selected.color}
                onChange={(e) =>
                  updateElement(selected.id, { color: e.target.value })
                }
              />
              <input
                type="number"
                value={selected.fontSize}
                onChange={(e) =>
                  updateElement(selected.id, { fontSize: parseInt(e.target.value) })
                }
              />
            </>
          )}
          {selected.type === 'image' && (
            <>
              <input
                type="number"
                value={selected.width}
                onChange={(e) =>
                  updateElement(selected.id, { width: parseInt(e.target.value) })
                }
              />
              <input
                type="number"
                value={selected.height}
                onChange={(e) =>
                  updateElement(selected.id, { height: parseInt(e.target.value) })
                }
              />
            </>
          )}
          {selected.type === 'shape' && (
            <>
              <input
                type="color"
                value={selected.color}
                onChange={(e) =>
                  updateElement(selected.id, { color: e.target.value })
                }
              />
            </>
          )}
          <button onClick={() => removeElement(selected.id)}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;