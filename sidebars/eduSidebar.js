const eduSidebar =   {
  type: 'category', 
  label: ':edu', 
  link:{
    type: 'doc', 
    id: 'boards/mcu/mcu-overview',
  }, 
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
      items: [
        'boards/mcu/mcu-revisions', 
        'boards/mcu/mcu-in-betrieb-nehmen', 
        'boards/mcu/mcu-erster-sketch',
        'boards/mcu/mcu-kompilieren',
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
        {
          type: 'category', 
          label: 'in der :edu enthaltene Hardware',
          link: {
            type: 'generated-index',
            title: 'in der :edu enthaltene Hardware',
          }, 
          items:[
            'hardware/bee/wifi-bee',
            'hardware/bee/sd-bee',
            'hardware/sensors/temperatur-luftfeuchte',
            'hardware/sensors/helligkeit-uv',
            'hardware/sensors/distanz',
            'hardware/sensors/mikro',
            'hardware/sensors/luftdruck-temperatur',
            'hardware/accessoires/display', 
            'hardware/sensors/bmx055',
          ]
        },
        {
          type:'category',
          label: 'zusätzlich erwerbare Hardware',
          link: {
            type: 'generated-index',
            title: 'zusätzlich erwerbbare Hardware',
          },
          items: [
            'hardware/sensors/feinstaub-sds011', 
            'hardware/sensors/feinstaub-sps30', 
            'hardware/sensors/co2', 
            'hardware/sensors/truebner', 
            'hardware/sensors/umweltsensor', 
            'hardware/bee/ethernet-bee',
            'hardware/accessoires/gps',
            'hardware/sensors/wassertemperatur',
            'hardware/accessoires/multiplexer'

            ]
          ]
        }

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
        "editors/blockly/blocks/logik",
        "editors/blockly/blocks/mathematik",
        "editors/blockly/blocks/schleifen",
        "editors/blockly/blocks/sensoren",
        "editors/blockly/blocks/text",
        "editors/blockly/blocks/variablen",
        "editors/blockly/blocks/web/opensensemap",
        "editors/blockly/blocks/zeit"
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
        "editors/arduino/installation-arduino-ide",
        "editors/arduino/installation-bsp",
        "boards/mcu/mcu-sensebox-io-library",
        "editors/arduino/libraries-hinzufuegen", 
        "editors/arduino/first-steps"
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
  