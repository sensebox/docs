const miniSidebar = {
  type: 'category',
  label: ':mini',
  link: {
    type: 'doc',
    id: 'boards/mini/mini-overview',
  },
  items: [
    {
      type: 'category',
      label: 'Hardware',
      link: {
        type: 'generated-index',
        title: 'Hardware',
      },
      items: [
        {
          type: 'category',
          label: 'in der :mini enthaltene Hardware',
          link: {
            type: 'generated-index',
            title: 'in der :edu enthaltene Hardware',
          },
          items: [
            'hardware/bee/wifi-bee',
            'hardware/bee/sd-bee',
            'hardware/sensors/umweltsensor',
            'hardware/accessoires/display',
            'hardware/accessoires/rgb-led',
			'hardware/sensors/niederschlag-rg15',
			'hardware/accessoires/cable_overview',
          ],
        },
        {
          type: 'category',
          label: 'zusätzlich erwerbbare Hardware',
          link: {
            type: 'generated-index',
            title: 'zusätzlich erwerbbare Hardware',
          },
          items: [
            'hardware/sensors/feinstaub-sds011',
            'hardware/sensors/feinstaub-sps30',
            'hardware/sensors/co2',
            'hardware/sensors/truebner',
			'hardware/sensors/niederschlag-rg15',
            'hardware/bee/ethernet-bee',
            'hardware/accessoires/gps',
            'hardware/sensors/wassertemperatur',
            'hardware/accessoires/multiplexer',
            'hardware/sensors/temperatur-luftfeuchte',
            'hardware/sensors/helligkeit-uv',
            'hardware/sensors/distanz',
            'hardware/sensors/mikro',
            'hardware/sensors/luftdruck-temperatur',
            'hardware/sensors/bmx055',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Blockly',
      link: {
        type: 'generated-index',
        title: 'Blockly',
      },
      items: [
        'editors/blockly/blocks/logik',
        'editors/blockly/blocks/mathematik',
        'editors/blockly/blocks/schleifen',
        'editors/blockly/blocks/sensoren',
        'editors/blockly/blocks/text',
        'editors/blockly/blocks/variablen',
        'editors/blockly/blocks/web/opensensemap',
        'editors/blockly/blocks/web/wifi',
        'editors/blockly/blocks/zeit',
      ],
    },
    {
      type: 'category',
      label: 'Arduino',
      link: {
        type: 'generated-index',
        title: 'Arduino',
      },
      items: [
        'editors/arduino/installation-arduino-ide',
        'editors/arduino/installation-bsp',
        'boards/mcu/mcu-sensebox-io-library',
        'editors/arduino/libraries-hinzufuegen',
        'editors/arduino/first-steps',
      ],
    },
  ],
}

export default miniSidebar
