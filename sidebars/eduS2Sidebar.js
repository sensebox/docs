/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */




const eduS2Hardware = ["temperatur-luftfeuchte","helligkeit-uv","luftdruck-temperatur",  "photodiode", "mpu6050","tof",   "bee/bluetooth-bee","wifi",  "sd",
"accessoires/display", "rgb-led-esp32", "accessoires/led-matrix", ]


const eduS2Sidebar =   {
  type: 'category', 
  label: ':edu S2', 
  link : {
    type: 'doc',
    id: 'categories/edu-s2-overview',
  },
  // link : {
  //   type: 'generated-index',
  //   title: 'senseBox:edu S2',
  // },
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
      items: eduS2Hardware.map(id => `hardware/${id}`)
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
      items: ["circuitpython/circuitpython_esp32"]
    }
  ]
}


export default {
  senseBoxSidebar: [
    eduS2Sidebar
  ]
}

