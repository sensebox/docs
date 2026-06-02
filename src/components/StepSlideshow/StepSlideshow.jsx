import React, { useState } from 'react'
import { cx } from 'class-variance-authority'

export default function StepSlideshow({ steps }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState('next')

  const changeStep = (newStep, dir) => {
    if (isTransitioning) return
    setDirection(dir)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(newStep)
      setIsTransitioning(false)
    }, 300)
  }

  const nextStep = () => {
    const newStep = (currentStep + 1) % steps.length
    changeStep(newStep, 'next')
  }

  const prevStep = () => {
    const newStep = (currentStep - 1 + steps.length) % steps.length
    changeStep(newStep, 'prev')
  }

  const goToStep = (index) => {
    if (index === currentStep) return
    const dir = index > currentStep ? 'next' : 'prev'
    changeStep(index, dir)
  }

  return (
    <div className="step-slideshow w-full max-w-4xl mx-auto">
      {/* Main Image Container */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Navigation Arrows */}
        <button
          onClick={prevStep}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Vorheriger Schritt"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextStep}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Nächster Schritt"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Step Counter */}
        <div className="absolute top-4 right-4 z-20 bg-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300">
          Schritt {currentStep + 1} / {steps.length}
        </div>

        {/* Image */}
        <div className="flex items-center justify-center min-h-[400px] overflow-hidden">
          <img
            key={currentStep}
            src={steps[currentStep]}
            alt={`Schritt ${currentStep + 1}`}
            className={cx(
              'max-w-full max-h-[500px] object-contain',
              'animate-in fade-in slide-in-from-right-4 duration-300',
              direction === 'prev' && 'slide-in-from-left-4'
            )}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStep(index)}
            className={cx(
              'transition-all duration-300 rounded-full transform',
              currentStep === index
                ? 'w-4 h-4 bg-green scale-110'
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110'
            )}
            aria-label={`Gehe zu Schritt ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
