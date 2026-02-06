import React from 'react';

export function TechSpecs({ 
  name, sku, processor, processorDetails,
  i2cPorts, uartPorts, spiPorts, digitalIOs, analogIOs, 
  connectorSystem, voltage,
  xbeeSlots, dataTransferOptions, sdCard,
  wifi, bluetooth,
  onboardFeatures,
  cryptoAuth, otaUpgrade, bootloader,
  rom, sram, psram, flash,
  ioVoltage, inputVoltage, batterySupport,
  width, length 
}) {
  const Row = ({ label, value }) => {
    if (!value) return null;
    
    return (
      <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50/30 transition-colors dark:border-gray-800 dark:hover:bg-gray-800/60">
        <td className="py-4 px-6 text-sm font-bold text-gray-900 w-2/5 bg-gray-50/50 dark:bg-gray-800/60 dark:text-gray-100">
          {label}
        </td>
        <td className="py-4 px-6 text-sm text-gray-700 dark:text-gray-200">
          {value}
        </td>
      </tr>
    );
  };

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

            <SectionHeader title="Prozessor" />
            <Row label="Prozessor" value={processor} />
            <Row label="Details" value={processorDetails} />

            <SectionHeader title="Schnittstellen" />
            <Row label="I2C" value={i2cPorts} />
            <Row label="UART" value={uartPorts} />
            <Row label="SPI" value={spiPorts} />
            <Row label="Digitale I/Os" value={digitalIOs} />
            <Row label="Analoge I/Os" value={analogIOs} />
            <Row label="Steckersystem" value={connectorSystem} />
            <Row label="Spannungstoleranz" value={voltage} />

            <SectionHeader title="Datenübertragung" />
            <Row label="XBee Sockel" value={xbeeSlots} />
            <Row label="Übertragungsoptionen" value={dataTransferOptions} />
            <Row label="SD-Karte" value={sdCard} />

            {(wifi || bluetooth) && (
              <>
                <SectionHeader title="Konnektivität" />
                <Row label="Wi-Fi" value={wifi} />
                <Row label="Bluetooth" value={bluetooth} />
              </>
            )}

            {onboardFeatures && (
              <>
                <SectionHeader title="Onboard Features" />
                <Row label="Features" value={onboardFeatures} />
              </>
            )}

            {(cryptoAuth || otaUpgrade || bootloader) && (
              <>
                <SectionHeader title="Weitere Features" />
                <Row label="Crypto Authentication" value={cryptoAuth} />
                <Row label="OTA Firmware-Upgrades" value={otaUpgrade} />
                <Row label="Bootloader" value={bootloader} />
              </>
            )}

            {(rom || sram || psram || flash) && (
              <>
                <SectionHeader title="Speicher" />
                <Row label="ROM" value={rom} />
                <Row label="SRAM" value={sram} />
                <Row label="PSRAM" value={psram} />
                <Row label="Flash" value={flash} />
              </>
            )}

            <SectionHeader title="Stromversorgung" />
            <Row label="I/O Spannung" value={ioVoltage} />
            <Row label="Eingangsspannung" value={inputVoltage} />
            <Row label="Batterie" value={batterySupport} />

            {(width || length) && (
              <>
                <SectionHeader title="Abmessungen" />
                <Row label="Breite" value={width} />
                <Row label="Länge" value={length} />
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TechSpecs;