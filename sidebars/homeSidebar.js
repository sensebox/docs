const homeSidebar = {
  type: 'category',
  label: ':home',
  key: 'home',
  link: {
    type: 'doc',
    id: 'boards/mcu/mcu-overview',
  },
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
	  key: 'home-gettingStarted',
      items: [
        'boards/mcu/mcu-revisions',
        'boards/mcu/mcu-in-betrieb-nehmen',
        'boards/mcu/mcu-erster-sketch',
        'boards/mcu/mcu-kompilieren',
      ],
    },
    {
      type: 'category',
      label: 'Aufbau und Installation',
	  key: 'home-setup',
      link: {
        type: 'generated-index',
        title: 'Hardware',
      },
      items: [
        'products/home/aufbau/home-schritt-1',
        'products/home/aufbau/home-schritt-2',
        'products/home/aufbau/home-schritt-3',
        'products/home/aufbau/home-aufstellen',
        'products/home/aufbau/aufbau-video',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
	  key: 'home-hardware',
      link: {
        type: 'generated-index',
        title: 'Hardware',
      },
      items: [
        'hardware/bee/wifi-bee',
        'hardware/bee/sd-bee',
        'hardware/bee/lora-bee',
        'hardware/sensors/temperatur-luftfeuchte',
        'hardware/sensors/helligkeit-uv',
        'hardware/sensors/luftdruck-temperatur',
        'hardware/accessoires/display',
        'hardware/sensors/bmx055',
        'hardware/sensors/feinstaub-sds011',
        'hardware/sensors/feinstaub-sps30',
        'hardware/sensors/co2',
        'hardware/sensors/truebner',
        'hardware/sensors/umweltsensor',
		'hardware/sensors/niederschlag-rg15',
        'hardware/bee/ethernet-bee',
        'hardware/accessoires/gps',
        'hardware/accessoires/multiplexer',
      ],
    },
    {
      type: 'category',
      label: 'Erweiterungen',
	  key: 'home-extensions',
      link: {
        type: 'generated-index',
        title: 'Erweiterungen',
      },
      items: [
        'products/home/erweiterungen/home-erweiterung-LoRa',
        'hardware/accessoires/solar_set',
        'products/home/erweiterungen/circuitpython',
      ],
    },
  ],
}

export default homeSidebar
