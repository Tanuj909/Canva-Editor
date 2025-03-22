import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import TextStyleSidebar from './components/TextStyleSidebar';
import TemplateList from './components/TemplateDesign';
import './App.css';
import html2canvas from 'html2canvas';

const BASE_CANVAS_WIDTH = 800;
const BASE_CANVAS_HEIGHT = 600;

function App() {
  const loadState = () => {
    const savedState = localStorage.getItem('appState');
    return savedState
      ? JSON.parse(savedState)
      : {
          pages: [{ elements: [] }],
          currentPageIndex: 0,
          selectedElement: null,
          canvasSize: { width: 800, height: 600 },
        };
  };

  const saveState = (state) => {
    localStorage.setItem('appState', JSON.stringify(state));
  };

  const [state, setState] = useState(loadState());
  const { pages, currentPageIndex, selectedElement, canvasSize } = state;

  const updateState = (newState) => {
    setState((prevState) => {
      const updatedState = { ...prevState, ...newState };
      saveState(updatedState);
      return updatedState;
    });
  };

  const currentPage = pages[currentPageIndex];
  const elements = currentPage.elements;

  const addImage = (image) => {
    const newElement = {
      type: 'image',
      id: Date.now(),
      src: image,
      x: 100,
      y: 100,
      width: 200,
      height: 200,
    };
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = [...elements, newElement];
    updateState({ pages: updatedPages, selectedElement: newElement.id });
  };

  const addText = () => {
    const newElement = {
      type: 'text',
      id: Date.now(),
      text: 'New Text',
      x: 100,
      y: 100,
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#000000',
      width: 150,
      height: 50,
    };
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = [...elements, newElement];
    updateState({ pages: updatedPages, selectedElement: newElement.id });
  };

  const addShape = (shapeType) => {
    const newElement = {
      type: 'shape',
      id: Date.now(),
      shapeType,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      color: '#000000',
    };
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = [...elements, newElement];
    updateState({ pages: updatedPages, selectedElement: newElement.id });
  };

  const removeElement = (id) => {
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = elements.filter(
      (element) => element.id !== id
    );
    updateState({ pages: updatedPages, selectedElement: null });
  };

  const updateElement = (id, updates) => {
    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = elements.map((element) =>
      element.id === id ? { ...element, ...updates } : element
    );
    updateState({ pages: updatedPages });
  };

  const resizeCanvas = (width, height) => {
    updateState({ canvasSize: { width, height } });
  };

  const canvasRef = useRef(null);

  const downloadCanvas = () => {
    if (canvasRef.current) {
      html2canvas(canvasRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'design.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  const selectedTextElement = elements.find(
    (element) => element.id === selectedElement && element.type === 'text'
  );

  const handleTemplateSelect = (template) => {
    const scaleX = canvasSize.width / BASE_CANVAS_WIDTH;
    const scaleY = canvasSize.height / BASE_CANVAS_HEIGHT;

    const scaledElements = template.elements.map((element) => ({
      ...element,
      x: element.x * scaleX,
      y: element.y * scaleY,
      width: element.width * scaleX,
      height: element.height * scaleY,
      fontSize: element.fontSize * Math.min(scaleX, scaleY),
    }));

    const updatedPages = [...pages];
    updatedPages[currentPageIndex].elements = scaledElements;
    updateState({ pages: updatedPages });
    setShowTemplates(false);
  };

  const addPage = () => {
    const newPages = [...pages, { elements: [] }];
    updateState({ pages: newPages, currentPageIndex: pages.length });
  };

  const switchPage = (index) => {
    updateState({ currentPageIndex: index, selectedElement: null });
  };

  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Navbar onDownload={downloadCanvas} />

      <div className="flex flex-col flex-1 pt-16">
        {/* Toolbar */}
        <div className="bg-purple-900 p-4 shadow-lg">
          <Toolbar
            selectedElement={selectedElement}
            elements={elements}
            updateElement={updateElement}
            addImage={addImage}
            addText={addText}
            addShape={addShape}
            removeElement={removeElement}
            resizeCanvas={resizeCanvas}
            setShowTemplates={setShowTemplates}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 relative p-6">
          {/* Text Style Sidebar */}
          {selectedTextElement && (
            <div className="absolute left-6 top-6 w-72 z-10">
              <TextStyleSidebar
                selectedTextElement={selectedTextElement}
                updateElement={updateElement}
              />
            </div>
          )}

          {/* Canvas */}
          <div className="flex-1 flex justify-center items-start">
            <div className="bg-white rounded-lg shadow-xl p-4 border border-purple-200">
              <Canvas
                ref={canvasRef}
                elements={elements}
                selectedElement={selectedElement}
                setSelectedElement={(id) => updateState({ selectedElement: id })}
                updateElement={updateElement}
                canvasSize={canvasSize}
              />
            </div>
          </div>

          {/* Templates Sidebar */}
          <div className="absolute right-6 top-6 z-10">
            <button
              className="bg-purple-600 text-white px-5 py-2.5 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => setShowTemplates(!showTemplates)}
            >
              Templates
            </button>
            {showTemplates && (
              <TemplateList
                onTemplateSelect={handleTemplateSelect}
                onClose={() => setShowTemplates(false)}
              />
            )}
          </div>
        </div>

        {/* Page Controls */}
        <div className="bg-purple-900 p-4 shadow-lg">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mb-4"
            onClick={addPage}
          >
            Add Page
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {pages.map((page, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPageIndex === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-purple-200 text-purple-900 hover:bg-purple-300'
                }`}
                onClick={() => switchPage(index)}
              >
                Page {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;