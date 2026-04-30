import { cx } from 'class-variance-authority'
import React, { useState, useEffect } from 'react'

function ImageWithTitle({ src, alt, title, size }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Trigger animation nach dem Mounten
      requestAnimationFrame(() => setIsAnimating(true))
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setIsOpen(false), 200)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative group">
          <img
            className={cx(
              size === 'xl' ? 'w-[45rem] ' : 'w-[25rem]',
              'cursor-zoom-in transition-transform duration-200 hover:scale-[1.02]'
            )}
            src={src}
            alt={alt}
            onClick={() => setIsOpen(true)}
          />
          <div className="absolute right-2 top-2 rounded bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            🔍 Vergrößern
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{title}</p>
      </div>

      {isOpen && (
        <div
          className={cx(
            'fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200',
            isAnimating ? 'opacity-100' : 'opacity-0'
          )}
          onClick={handleClose}
        >
          <button
            className="absolute right-4 top-4 text-3xl text-white transition-colors hover:text-gray-300"
            onClick={handleClose}
            aria-label="Schließen"
          >
            ×
          </button>
          <div
            className={cx(
              'flex flex-col items-center transition-all duration-200',
              isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="max-h-[85vh] max-w-[90vw] cursor-zoom-out object-contain"
              src={src}
              alt={alt}
              onClick={handleClose}
            />
            {title && (
              <p className="mt-3 text-center text-sm text-white/90">{title}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageWithTitle
