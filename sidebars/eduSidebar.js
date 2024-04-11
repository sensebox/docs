const eduSidebar =   {
  type: 'category', 
  label: ':edu', 
  link:{
    type: 'doc', 
    id: 'mcu/mcu-overview',
  }, 
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
      items: [
        'mcu/mcu-revisions', 
        'mcu/mcu-in-betrieb-nehmen', 
        'mcu/mcu-erster-sketch',
        'mcu/mcu-kompilieren',
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
        'hardware/bee/wifi-bee',
        'hardware/bee/sd-bee',
        'hardware/bee/ethernet-bee',
        'hardware/sensors/temperatur-luftfeuchte',
        'hardware/sensors/helligkeit-uv',
        'hardware/sensors/distanz',
        'hardware/sensors/mikro',
        'hardware/sensors/luftdruck-temperatur',
        'hardware/accessoires/display', 
        'hardware/accessoires/gps',
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
      items:[
        "arduino/installation-arduino-ide",
        "arduino/installation-bsp",
        "mcu/mcu-library",
        "mcu/mcu-sensebox-io-library"
      ]
    }, 
    {
      type: 'category',
      label: 'Besonderheiten',
      link: {
        type: 'generated-index',
        title: 'Besonderheiten',
      },
      items:[
        "misc/openRoberta", 

      ]
    }


  ]
}
  
export default eduSidebar;
  