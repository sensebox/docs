const lautstaerkemesserSidebar = {
    type: 'category', 
    label: ':Lautstärkemesser', 
    link: {
      type : 'generated-index',
    },
    items: [
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