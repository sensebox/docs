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
        items: [
            'hardware/sensors/bmx055',
        ]
      }
    ]
  }
  
export default trafficLightSidebard;