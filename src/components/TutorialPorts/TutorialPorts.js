import React from 'react'
// MCU Ports
import i2cPort from '@site/static/img/mcu/ports/i2c-wire-port.png'
import uartPort from '@site/static/img/mcu/ports/uart-serial-port.png'
import ioPort from '@site/static/img/mcu/ports/io-port.png'
// MCU S2 Ports
import i2cPortS2 from '@site/static/img/mcus2/ports/i2c-wire-port.png'
import uartPortS2 from '@site/static/img/mcus2/ports/uart-serial-port.png'
import ioPortS2 from '@site/static/img/mcus2/ports/io-port.png'
import { useBoardStore } from '@site/src/lib/stores/store'

const portImages = {
  i2c: i2cPort,
  uart: uartPort,
  io: ioPort,
}

const portImagesS2 = {
  i2c: i2cPortS2,
  uart: uartPortS2,
  io: ioPortS2,
}

function TutorialPorts({ port }) {
  const board = useBoardStore(state => state.board)

  const imageSrc = board === ':edu S2' ? portImagesS2[port] : portImages[port]

  return (
    <div className="mcu-ports">
      {imageSrc ? (
        <div className="flex flex-col items-center justify-center ">
          <img src={imageSrc} className="w-[40em]" alt={`${port} port`} />
          <p className="text-center">
            Die Komponente wird am {port.toUpperCase()} Port angeschlossen.
          </p>
        </div>
      ) : (
        <p>Bitte einen gültigen Port-Typ angeben: i2c, uart oder io.</p>
      )}
    </div>
  )
}

export default TutorialPorts
