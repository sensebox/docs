/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


const miniBoard = []
const mcuBoard = []
const mcuS2Board = []




const bikeHardware = ["feinstaub", "temperatur-luftfeuchte", "distanz", "bmx055", "bee/bluetooth-bee", "bee/sd-bee"]
const eduHardware = ["bee/wifi-bee", "bee/sd-bee", "temperatur-luftfeuchte", "helligkeit-uv", "distanz", "mikro", "luftdruck-temperatur", "accessoires/display"]
const eduS2Hardware = ["temperatur-luftfeuchte","helligkeit-uv","luftdruck-temperatur",  "photodiode", "mpu6050","tof",   "bee/bluetooth-bee","wifi",  "sd",
"accessoires/display", "rgb-led-esp32", "accessoires/led-matrix", ]
const homeHardware = ["temperatur-luftfeuchte", "luftdruck-temperatur", "helligkeit-uv", "distanz", "mikro", "accessoires/display", "bee/wifi-bee", "feinstaub"]
const trafficLight = ["co2", "accessoires/display", "accessoires/rgb-led"]
const mini = ["umweltsensor", "accessoires/display","bee/wifi-bee"]


const bikeSidebar = {
  type: 'category', 
  label: ':bike', 
  link: {
    type : 'generated-index',
  },
  items: [
    {
      type: 'category', 
      label: 'Hardware', 
      link: {
        type : 'generated-index',
        title: 'Hardware',
      },
      items: 
      // generate items from bikeHardware variable
      // map over each item in bikeHardware and return an object lookin like this {type: 'ref', id: 'hardware/id'} with the item
      [
        ...bikeHardware.map(id => ({type: 'ref', id: `hardware/${id}`}))
      ]
      }, 
      {
        type:'category', 
        label: 'App', 
        items: ["app/ersteschritteapp"]
      }
  ]
}

const eduSidebar =   {
  type: 'category', 
  label: ':edu', 
  link:{
    type: 'generated-index', 
    title: 'senseBox:edu',
  }, 
  items: [
    {
      type: 'category', 
      label: 'Hardware', 
      collapsible: false,
      link: {
        type : 'generated-index',
        title: 'Hardware',
        slug: '/hardware/edu',
      },
      items: eduHardware.map(id => `hardware/${id}` )
    }
  ]
}

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

const homeSidebar = {
  type: 'category', 
  label: ':home', 
  link: {
    type: 'generated-index',
    title: 'senseBox:home',
  },
  items: [
    {
      type: 'category', 
      label: 'Hardware', 
      link: {
        type : 'generated-index',
        title: 'Hardware',
      },
      items: homeHardware.map(id => `hardware/${id}`)
    }
  ]
}
const trafficLightSidebard =   {
  type: 'category', 
  label: ':CO2 Ampel', 
  link: {
    type: 'generated-index',
    title: 'CO2 Ampel',
  },
  items: [
    {
      type: 'category', 
      label: 'Hardware', 
      link: {
        type : 'generated-index',
        title: 'Hardware',
      },
      items: trafficLight.map(id => `hardware/${id}`)
    }
  ]
}

const miniSidebar =   {
  type: 'category', 
  label: ':mini', 
  link: {
    type: 'generated-index',
    title: 'senseBox:mini',
  },
  items: [
    {
      type: 'category', 
      label: 'Hardware', 
      link: {
        type : 'generated-index',
        title: 'Hardware',
      },
      items: mini.map(id => `hardware/${id}`)
    }
  ]
}

export default {
  senseBoxSidebar: [
    // bikeSidebar,
    // eduSidebar,
    eduS2Sidebar,
    // homeSidebar,
    // trafficLightSidebard, 
    // miniSidebar
  ]
}

