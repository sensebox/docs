/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const eduS2Sidebar = {
  type: 'category',
  label: ':edu S2',
  link: {
    type: 'doc',
    id: 'boards/mcus2/mcu-s2-overview',
  },
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
      items: [
        'boards/mcus2/mcus2-in-betrieb-nehmen',
        'boards/mcus2/mcus2-erster-sketch',
        'boards/mcus2/mcus2-kompilieren',
      ],
    },
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
          label: 'in der :edu S2 enthaltene Hardware',
          link: {
            type: 'generated-index',
            title: 'in der :edu S2 enthaltene Hardware',
          },
          items: [
            'hardware/sensors/temperatur-luftfeuchte',
            'hardware/sensors/helligkeit-uv',
            'hardware/sensors/luftdruck-temperatur',
            'hardware/sensors/photodiode',
            'hardware/sensors/mpu6050',
            'hardware/sensors/tof',
            'hardware/bee/bluetooth-bee',
            'hardware/wifi',
            'hardware/sd',
            'hardware/accessoires/display',
            'hardware/accessoires/rgb-led-esp32',
            'hardware/accessoires/led-matrix',
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
			  'hardware/bee/lora-bee',
			  'hardware/sensors/co2',
			  'hardware/sensors/truebner',
			  'hardware/sensors/umweltsensor',
			  'hardware/sensors/niederschlag-rg15',
			  'hardware/bee/ethernet-bee',
			  'hardware/accessoires/gps',
			  'hardware/sensors/wassertemperatur',
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
        'editors/arduino/first-steps',
        'editors/arduino/libraries-hinzufuegen',
      ],
    },

    {
      type: 'category',
      label: 'CircuitPython',
      link: {
        type: 'generated-index',
        title: 'CircuitPython',
      },
      items: ['editors/circuitpython/circuitpython_esp32',
		'editors/circuitpython/circpy_uninstall',
		'editors/circuitpython/circpy_first-steps',
		'editors/circuitpython/circpy_libraries',
		'editors/circuitpython/circpy_supported-hardware',
		'editors/circuitpython/circpy_editors',
		'editors/circuitpython/circpy_osem',
		'editors/circuitpython/circpy_example'],
    },
  ],
}

export default eduS2Sidebar
