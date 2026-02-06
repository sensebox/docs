import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function PortItem({ src, name }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-xl border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-200 dark:bg-gray-800 dark:border-gray-700">
        <img src={src} alt={name} className="w-12 h-12 object-contain" />
      </div>
      <p className="text-xs font-medium text-gray-600 text-center leading-tight dark:text-gray-300">
        {name}
      </p>
    </div>
  );
}

export function PortsOverview({ title, children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }} 
      className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-900 dark:border-gray-800"
    >
      {title && (
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {children}
      </div>
    </motion.div>
  );
}