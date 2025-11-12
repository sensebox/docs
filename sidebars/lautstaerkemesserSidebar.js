const lautstaerkemesserSidebar = {
    type: 'category', 
    label: ':Lautstärkemesser', 
    link: {
      type: 'doc',
      id: 'products/lautstaerkemesser/lautsaerkemesser-overview',
    },
    items: [
        {
          type: 'category',
          label: 'Aufbau und Installation',
          link: {
            type: 'generated-index',
            title: 'Aufbau und Installation',
          },
          items: [
            'products/lautstaerkemesser/aufbau/ls-messer-schritt-1',
          ],
        },
        {
          type:'category', 
          label: 'Sensoren', 
          items: [
            "hardware/sensors/dnms-lautstaerke",
          ]
        },
    ]
  }


  export default lautstaerkemesserSidebar;