import React from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import { cx } from 'class-variance-authority'

export default function ImageComparison({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel,
  size,
}) {
  return (
    <div className="flex flex-col items-center">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={leftImage}
            alt={leftLabel || 'Bild Links'}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={rightImage}
            alt={rightLabel || 'Bild Rechts'}
          />
        }
        className={cx(size === 'xl' ? 'w-[45rem] ' : 'w-[20rem]')}
      />
    </div>
  )
}
