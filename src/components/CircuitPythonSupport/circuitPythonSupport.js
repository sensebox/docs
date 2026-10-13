// Quelle: docs/editors/circuitpython/circpy_supported-hardware.mdx
// „supported“ bedeutet hier: Laut Übersicht ist eine Bibliothek vorhanden.
// „limited“ kennzeichnet zusätzliche Anpassungen oder Board-Einschränkungen.
// „unknown“ entspricht den nicht näher erläuterten „/“-Einträgen der Übersicht.
export const circuitPythonSupport = {
  bme680: {
    name: 'BME680 Umweltsensor',
    status: 'limited',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_BME680',
    note: 'Anpassung der I²C-Adresse notwendig.',
  },
  scd30: {
    name: 'SCD30 CO2 Sensor',
    status: 'limited',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_SCD30',
    note: 'Anpassung am Beispielcode notwendig.',
    examples: 'https://github.com/sensebox/MCU-S2-circuitpython-examples',
  },
  bmp280: {
    name: 'BMP280',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_BMP280',
  },
  hdc1080: {
    name: 'HDC1080',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/sensebox/CircuitPython_HDC1080/',
  },
  sps30: {
    name: 'SPS30',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/sensebox/Adafruit_CircuitPython_SPS30',
  },
  veml6070: {
    name: 'VEML6070 UV Sensor',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_VEML6070/',
  },
  tof: {
    name: 'ToF Sensor',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/sensebox/CircuitPython_VL53LxCX',
  },
  dps310: {
    name: 'DPS310',
    status: 'limited',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_DPS310/',
    note: 'Anpassung der I²C-Adresse notwendig.',
  },
  mpu6050: {
    name: 'MPU6050 Gyroskop',
    status: 'limited',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_MPU6050',
    boardVersions: ['MCU-S2.1'],
    note: 'Sensor nur für MCU-S2.1 verfügbar. Anpassung am Beispielcode notwendig.',
    examples: 'https://github.com/sensebox/MCU-S2-circuitpython-examples',
  },
  icm20948: {
    name: 'ICM-20948 Gyroskop',
    status: 'limited',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_ICM20X',
    boardVersions: ['MCU-S2.2'],
    note: 'Sensor nur für MCU-S2.2 verfügbar. Anpassung am Beispielcode notwendig.',
    examples: 'https://github.com/sensebox/MCU-S2-circuitpython-examples',
  },
  oled: {
    name: 'OLED Display',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_SSD1306',
  },
  sdBee: {
    name: 'SD-Bee',
    status: 'supported',
    libraryAvailable: true,
    library: 'https://github.com/adafruit/Adafruit_CircuitPython_SD',
  },
  loraBee: {
    name: 'LoRa-Bee',
    status: 'unknown',
    libraryAvailable: null,
    library: null,
  },
  bluetoothBee: {
    name: 'Bluetooth-Bee',
    status: 'unknown',
    libraryAvailable: null,
    library: null,
  },
};

export const circuitPythonLibraryInstallation = {
  note: 'Die Hardware-Übersicht ist möglicherweise unvollständig und wird laufend erweitert. Rückmeldungen zu getesteten Komponenten sind willkommen.',
  steps: [
    'Den Release auf der rechten Seite des jeweiligen GitHub-Repositories herunterladen. Laut Übersicht die Datei „10.x-mpy_.zip“ wählen.',
    'Die ZIP-Datei entpacken und die enthaltenen .mpy-Dateien in den lib-Ordner auf dem CIRCUITPY-Laufwerk kopieren.',
  ],
  documentation: 'https://docs.sensebox.de/docs/editors/circuitpython/circpy_libraries',
};
