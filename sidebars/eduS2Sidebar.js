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
    id: 'edus2/edu-s2-overview',
  },
  items: [
    {
      type: 'category', 
      label: 'Erste Schritte', 
      items: [
        "blockly/allgemein-basics-inbetriebnahme",
        "blockly/your-first-sketch",
        "blockly/kompilieren", 
        "blockly/reset-esp32"
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
      "blockly/logik",
      "blockly/mathematik",
      "blockly/schleifen",
      "blockly/sensoren",
      "blockly/text",
      "blockly/variablen",
      "blockly/web/opensensemap",
      "blockly/zeit"
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