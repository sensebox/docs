import React from 'react';

export function TechSpecs({ 
  name, sku, mcu, usb, ledPin, ioPins, analogPins, pwmPins, interrupts, 
  wifi, bluetooth, uart, i2c, spi, ioVoltage, inputVoltage, sourceCurrent, sinkCurrent,
  processor, rom, sram, psram, flash, width, length 
}) {
  const Row = ({ label, value }) => (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/30 transition-colors dark:border-gray-800 dark:hover:bg-gray-800/60">
      <td className="py-4 px-6 text-sm font-bold text-gray-900 w-2/5 bg-gray-50/50 dark:bg-gray-800/60 dark:text-gray-100">
        {label}
      </td>
      <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-200">
        {value || "—"}
      </td>
    </tr>
  );

  const SectionHeader = ({ title }) => (
    <tr className="bg-gray-100/80 dark:bg-gray-800/60">
      <td colSpan="2" className="py-3 px-6 text-xs font-black uppercase tracking-wider text-gray-600 dark:text-gray-300">
        {title}
      </td>
    </tr>
  );

  return (
<div className="w-full flex justify-center my-8"> 
      
      <div className="max-w-4xl w-full overflow-hidden">
        <table className="w-full text-left border-collapse bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <tbody>
          <SectionHeader title="Board" />
          <Row label="Name" value={name} />
          <Row label="SKU" value={sku} />

          <SectionHeader title="Microcontroller" />
          <Row label="MCU" value={mcu} />

          <SectionHeader title="USB Connector" />
          <Row label="USB" value={usb} />

          <SectionHeader title="Pins" />
          <Row label="Built-in LED Pin" value={ledPin} />
          <Row label="Digital I/O Pins" value={ioPins} />
          <Row label="Analog Input Pins" value={analogPins} />
          <Row label="PWM Pins" value={pwmPins} />
          <Row label="External Interrupts" value={interrupts} />

          <SectionHeader title="Connectivity" />
          <Row label="Wi-Fi®" value={wifi} />
          <Row label="Bluetooth®" value={bluetooth} />

          <SectionHeader title="Communication" />
          <Row label="UART" value={uart} />
          <Row label="I2C" value={i2c} />
          <Row label="SPI" value={spi} />

          <SectionHeader title="Power" />
          <Row label="I/O Voltage" value={ioVoltage} />
          <Row label="Input Voltage" value={inputVoltage} />
          <Row label="Source Current" value={sourceCurrent} />
          <Row label="Sink Current" value={sinkCurrent} />

          <SectionHeader title="Clock Speed" />
          <Row label="Processor" value={processor} />

          <SectionHeader title="Memory" />
          <Row label="ROM" value={rom} />
          <Row label="SRAM" value={sram} />
          <Row label="PSRAM" value={psram} />
          <Row label="External Flash" value={flash} />

          <SectionHeader title="Dimensions" />
          <Row label="Width" value={width} />
          <Row label="Length" value={length} />
        </tbody>
      </table>
    </div>
    </div>
  );
}