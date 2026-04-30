import React from 'react'

export function IconItem({ icon, name, children, height = 16, width = 16, className = '' }) {
  return (
    <div className={`flex flex-col items-center group ${className}`}>
      <div
        className={`w-${width} h-${height} mb-2 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm group-hover:scale-110 group-hover:border-green-400 transition-all duration-200 dark:bg-gray-800 dark:border-gray-700`}
      >
        {children ? (
          children
        ) : (
          <i
            className={`${icon} text-2xl text-green-600 dark:text-green-400`}
            aria-hidden="true"
          ></i>
        )}
      </div>

      <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-tight text-center leading-tight dark:text-gray-400">
        {name}
      </p>
    </div>
  );
}
