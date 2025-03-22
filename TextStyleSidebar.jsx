import React from 'react';

const TextStyleSidebar = ({ selectedTextElement, updateElement }) => {
  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    updateElement(selectedTextElement.id, { [name]: value });
  };

  return (
    <div className="w-72 bg-white shadow-xl p-6 rounded-2xl border border-gray-100/50 backdrop-blur-sm">
      {/* Header */}
      <h3 className="text-xl font-semibold mb-6 text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Text Styling
      </h3>

      {/* Font Size */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Font Size
        </label>
        <input
          type="number"
          name="fontSize"
          value={selectedTextElement.fontSize}
          onChange={handleStyleChange}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300"
          placeholder="e.g., 16"
        />
      </div>

      {/* Font Family */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Font Family
        </label>
        <select
          name="fontFamily"
          value={selectedTextElement.fontFamily}
          onChange={handleStyleChange}
          className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 hover:border-indigo-300 appearance-none cursor-pointer"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Verdana">Verdana</option>
          <option value="Inter">Inter</option>
          <option value="Roboto">Roboto</option>
        </select>
      </div>

      {/* Text Color */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Text Color
        </label>
        <input
          type="color"
          name="color"
          value={selectedTextElement.color}
          onChange={handleStyleChange}
          className="w-full h-12 p-1 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-indigo-300 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default TextStyleSidebar;