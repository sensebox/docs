import React from 'react';

function ImageWithTitle({ src, alt, title }) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[25rem]" src={src} alt={alt} />
      <p className="text-gray-500 text-sm mt-2">{title}</p>
    </div>
  );
}

export default ImageWithTitle;