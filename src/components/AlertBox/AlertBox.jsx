import React from 'react';
import clsx from 'clsx';
// Icons für die verschiedenen Zustände
const icons = {
  success: (
    <svg className=" text-[#0f5132]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
  <svg className=" text-[#664d03]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.268 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  error: (
    <svg className=" text-[#842029] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  info: (
    <svg className="text-[#055160]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h1m0-4h.01M12 22a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  )
};

const AlertBox = ({ type, title, children }) => (
  <div className={clsx(`flex p-4 mb-4 text-sm text-${type}-700 bg-${type}-100 rounded-lg items-center`, 
    type === 'success' ? `bg-[#d1e7dd] text-[#0f5132]`: '',
    type === 'warning' ? `bg-[#fff3cd] text-[#664d03]`: '',
    type === 'error' ? `bg-[#f8d7da] text-[#842029]`: '' , 
    type === 'info' ? `bg-[#d1ecf1] text-[#055160]`: '')}
    role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${type}-500 bg-${type}-200 rounded-lg mr-3">
      {icons[type]}
    </div>
    <div>
      <span className="font-extrabold">{title}</span>
      {children}
    </div>
  </div>
);

export default AlertBox;
