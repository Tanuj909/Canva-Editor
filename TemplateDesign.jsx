import React from 'react';
import { motion } from 'framer-motion'; // Adding framer-motion for animations

const TemplateDesign = ({ onTemplateSelect, onClose }) => {
  const templates = [
    {
      id: 1,
      name: 'Professional Resume',
      elements: [
        {
          type: 'image',
          id: Date.now(),
          src: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.1808190604.1742634490&semt=ais_keywords_boost',
          x: 20,
          y: 20,
          width: 80,
          height: 80,
        },
        {
          type: 'text',
          id: Date.now() + 1,
          text: 'John Doe',
          x: 120,
          y: 30,
          fontSize: 32,
          fontFamily: 'Arial',
          color: '#333',
          width: 300,
          height: 50,
        },
        {
          type: 'text',
          id: Date.now() + 2,
          text: 'Software Engineer | Web Developer',
          x: 120,
          y: 80,
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#555',
          width: 300,
          height: 30,
        },
        { type: 'line', id: Date.now() + 3, x: 20, y: 120, width: 500 },
        {
          type: 'text',
          id: Date.now() + 4,
          text: 'Contact Information',
          x: 20,
          y: 140,
          fontSize: 20,
          fontFamily: 'Arial',
          color: '#222',
          width: 200,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 5,
          text: '📧 johndoe@example.com',
          x: 40,
          y: 170,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 250,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 6,
          text: '📞 +1 234 567 890',
          x: 40,
          y: 200,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 250,
          height: 30,
        },
        { type: 'line', id: Date.now() + 7, x: 20, y: 230, width: 500 },
        {
          type: 'text',
          id: Date.now() + 8,
          text: 'Experience',
          x: 20,
          y: 250,
          fontSize: 20,
          fontFamily: 'Arial',
          color: '#222',
          width: 200,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 9,
          text: '🔹 Software Engineer - ABC Tech (2020 - Present)',
          x: 40,
          y: 280,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 400,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 10,
          text: '🔹 Frontend Developer - XYZ Solutions (2017 - 2019)',
          x: 40,
          y: 310,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 400,
          height: 30,
        },
        { type: 'line', id: Date.now() + 11, x: 20, y: 340, width: 500 },
        {
          type: 'text',
          id: Date.now() + 12,
          text: 'Education',
          x: 20,
          y: 360,
          fontSize: 20,
          fontFamily: 'Arial',
          color: '#222',
          width: 200,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 13,
          text: '🎓 MCA - XYZ University (2016 - 2019)',
          x: 40,
          y: 390,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 400,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 14,
          text: '🎓 BCA - ABC College (2013 - 2016)',
          x: 40,
          y: 420,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 400,
          height: 30,
        },
        { type: 'line', id: Date.now() + 15, x: 20, y: 450, width: 500 },
        {
          type: 'text',
          id: Date.now() + 16,
          text: 'Skills',
          x: 20,
          y: 470,
          fontSize: 20,
          fontFamily: 'Arial',
          color: '#222',
          width: 200,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 17,
          text: '⚡ JavaScript, React, Node.js, MongoDB, SQL',
          x: 40,
          y: 500,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#444',
          width: 400,
          height: 30,
        },
      ],
    },
    {
      id: 2,
      name: 'Business Card',
      elements: [
        {
          type: 'text',
          id: Date.now(),
          text: 'John Doe',
          x: 50,
          y: 30,
          fontSize: 24,
          fontFamily: 'Arial',
          color: '#222',
          width: 200,
          height: 40,
        },
        {
          type: 'text',
          id: Date.now() + 1,
          text: 'CEO, Tech Innovations',
          x: 50,
          y: 70,
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#444',
          width: 250,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 2,
          text: 'Email: john.doe@example.com',
          x: 50,
          y: 110,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#555',
          width: 300,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 3,
          text: 'Phone: (123) 456-7890',
          x: 50,
          y: 140,
          fontSize: 16,
          fontFamily: 'Arial',
          color: '#555',
          width: 300,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 4,
          text: 'Tech Innovations Inc.',
          x: 50,
          y: 170,
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#333',
          width: 300,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 5,
          text: 'www.techinnovations.com',
          x: 50,
          y: 200,
          fontSize: 14,
          fontFamily: 'Arial',
          color: '#666',
          width: 300,
          height: 30,
        },
      ],
    },
    {
      id: 3,
      name: 'Birthday Invitation',
      elements: [
        {
          type: 'text',
          id: Date.now(),
          text: 'Happy Birthday!',
          x: 100,
          y: 50,
          fontSize: 36,
          fontFamily: 'Cursive',
          color: '#ff0000',
          width: 300,
          height: 50,
        },
        {
          type: 'text',
          id: Date.now() + 1,
          text: 'Join us to celebrate!',
          x: 100,
          y: 100,
          fontSize: 24,
          fontFamily: 'Cursive',
          color: '#ff9900',
          width: 300,
          height: 40,
        },
        {
          type: 'text',
          id: Date.now() + 2,
          text: 'Date: July 15, 2024',
          x: 100,
          y: 150,
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#333',
          width: 300,
          height: 30,
        },
        {
          type: 'text',
          id: Date.now() + 3,
          text: 'Venue: Wonderland Party Hall',
          x: 100,
          y: 180,
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#333',
          width: 300,
          height: 30,
        },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm z-50"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="templates-list bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-11/12 max-w-3xl relative max-h-[85vh] overflow-y-auto border border-gray-200/50"
      >
        {/* Close button with hover effect */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-200 bg-gray-100 rounded-full"
          onClick={onClose}
        >
          ×
        </motion.button>

        {/* Modern title with gradient */}
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Select Your Template
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              className="template-item p-5 border border-gray-100 rounded-xl cursor-pointer bg-gradient-to-br from-white to-gray-50 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              onClick={() => onTemplateSelect(template)}
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                {template.name}
              </h3>
              <div className="template-preview relative overflow-hidden rounded-lg p-4 bg-white/50 shadow-inner">
                {template.elements.map((element) => (
                  <motion.div
                    key={element.id}
                    whileHover={{ scale: 1.02 }}
                    className="mb-2 last:mb-0"
                  >
                    {element.type === 'text' ? (
                      <div
                        style={{
                          fontSize: element.fontSize,
                          fontFamily: element.fontFamily,
                          color: element.color,
                          transition: 'color 0.2s ease-in-out',
                        }}
                        className="truncate hover:text-indigo-600"
                      >
                        {element.text}
                      </div>
                    ) : element.type === 'image' ? (
                      <motion.img
                        whileHover={{ rotate: 2 }}
                        src={element.src}
                        alt="template preview"
                        className="rounded-md shadow-sm"
                        style={{
                          width: element.width,
                          height: element.height,
                        }}
                      />
                    ) : null}
                  </motion.div>
                ))}
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TemplateDesign;