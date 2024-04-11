/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


const eduS2Sidebar =   {
  type: 'category', 
  label: ':edu S2', 
  link : {
    type: 'doc',
    id: 'mcus2/mcu-s2-overview',
  },
  items: [
    {
      type: 'category', 
      label: 'Erste Schritte', 
      items: [
        "mcus2/mcus2-in-betrieb-nehmen",
        "mcus2/mcus2-erster-sketch",
        "mcus2/mcus2-kompilieren", 
      ]
    }, 
    {
      type: 'category', 
      label: 'Hardware', 
      link: {
        type : 'generated-index',
        title: 'Hardware',
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
        'hardware/accessoires/led-matrix'
      ]
    }, 
    {
      type: 'category',
      label: 'Blockly',
      link: {
        type: 'generated-index',
        title: 'Blockly',
      },
    items: [
      "blockly/blocks/logik",
      "blockly/blocks/mathematik",
      "blockly/blocks/schleifen",
      "blockly/blocks/sensoren",
      "blockly/blocks/text",
      "blockly/blocks/variablen",
      "blockly/blocks/web/opensensemap",
      "blockly/blocks/zeit"
    ]
    }, 
    {
      type: 'category',
      label: 'Arduino',
      link: {
        type: 'generated-index',
        title: 'Arduino',
      },
      items: [
        "arduino/installation-arduino-ide",
        "arduino/installation-bsp",
        "arduino/first-steps"

      ]
    },

    {
      type: 'category',
      label: 'Besonderheiten',
      link: {
        type: 'generated-index',
        title: 'Besonderheiten',
      },
      items: ["misc/circuitpython_esp32"]
    }
  ]
}

export default eduS2Sidebar;