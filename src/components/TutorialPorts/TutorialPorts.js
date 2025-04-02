import React from 'react'
// MCU Ports
import i2cPort from '@site/static/img/mcu/ports/i2c-wire-port.png'
import uartPort from '@site/static/img/mcu/ports/uart-serial-port.png'
import ioPort from '@site/static/img/mcu/ports/io-port.png'
// MCU S2 Ports
import i2cPortS2 from '@site/static/img/mcus2/ports/i2c-wire-port.png'
import uartPortS2 from '@site/static/img/mcus2/ports/uart-serial-port.png'
import ioPortS2 from '@site/static/img/mcus2/ports/io-port.png'
// Top-down Images
import mcutop from '@site/static/img/mcu/ports/mcutop.png'
import mcus2top from '@site/static/img/mcus2/mcus2top.png'
import miniTop from '@site/static/img/mini/sensebox-mini.png'

import { useBoardStore } from '@site/src/lib/stores/store'

const portImages = {
  i2c: i2cPort,
  uart: uartPort,
  io: ioPort,
  overview: mcutop,
}

const portImagesS2 = {
  i2c: i2cPortS2,
  uart: uartPortS2,
  io: ioPortS2,
  overview: mcus2top,
}

const portImagesMini = {
  overview: miniTop,
}

function TutorialPorts({ port = 'overview', imageOverride = null, textOverride = null }) {
  const board = useBoardStore(state => state.board)

  let imageSrc = null

  if (imageOverride) {
    imageSrc = imageOverride
  } else {
    if (board === ':edu S2') {
      imageSrc = portImagesS2[port]
    } else if (board === ':edu Mini') {
      imageSrc = portImagesMini[port] || portImages[port] // fallback
    } else {
      imageSrc = portImages[port]
    }
  }

  return (
    <div className="mcu-ports">
      {imageSrc ? (
        <div className="flex flex-col items-center justify-center">
          <img src={imageSrc} className="max-w-[18em]" alt={`${port || 'custom'} port`} />
          <p className="text-center">
            {textOverride
              ? textOverride
              : `Die Komponente wird am ${port?.toUpperCase()} Port angeschlossen.`}
          </p>
        </div>
      ) : (
        <p>Bitte einen gültigen Port-Typ angeben: i2c, uart, io oder overview.</p>
      )}
    </div>
  )
}

export default TutorialPorts
