import { cx } from 'class-variance-authority'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ImageWithTitle({ src, alt, title, size }) {
  return (
    <div className="flex flex-col items-center">
      <Zoom>
      <img
        className={cx(size === 'xl' ? 'w-[45rem] ' : 'w-[25rem]')}
        src={src}
        alt={alt}
      />
      </Zoom>
      <p className="mt-2 text-sm text-gray-500">{title}</p>
    </div>
  )
}

export default ImageWithTitle
