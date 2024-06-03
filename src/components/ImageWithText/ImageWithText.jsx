import { cx } from 'class-variance-authority'
import React from 'react'

function ImageWithTitle({ src, alt, title, size }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className={cx(size === 'xl' ? 'w-[45rem] ' : 'w-[25rem]')}
        src={src}
        alt={alt}
      />
      <p className="mt-2 text-sm text-gray-500">{title}</p>
    </div>
  )
}

export default ImageWithTitle
