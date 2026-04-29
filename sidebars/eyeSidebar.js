/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const eyeSidebar = {
  type: 'category',
  label: 'Eye',
  key: 'eye',
  link: {
    type: 'doc',
    id: 'boards/eye/eye-overview',
  },
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
	  key: 'eye-gettingStarted',
      items: [
        'boards/eye/eye-in-betrieb-nehmen',
        'boards/eye/eye-erster-sketch',
        'boards/eye/eye-kompilieren',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
	  key: 'eye-hardware',
      items: [
        'boards/eye/eye-ports-and-pins',
        'hardware/eye/camera',
        'hardware/eye/icm20948',
        'hardware/eye/rgb-led-esp32',
        'hardware/eye/wifi',
        'hardware/eye/ble',
        'hardware/eye/lora',
        'hardware/eye/sd'
      ],
    },
    {
      type: 'category',
      label: 'Blockly',
	  key: 'eye-blockly',
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
	  key: 'eye-arduino',
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
	  key: 'eye-circuitpython',
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

export default eyeSidebar
