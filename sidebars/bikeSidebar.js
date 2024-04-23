const bikeSidebar = {
    type: 'category', 
    label: ':bike', 
    link: {
      type : 'generated-index',
    },
    items: [
      {
        type:'doc', 
        label: 'Halterung', 
        id: 'products/bike/halterung/installation'
      },
        {
          type:'category', 
          label: 'App', 
          items: [
            "products/bike/app/download", 
            "products/bike/app/benutzung",
          ]
        },
        {
          type:'category', 
          label: 'Sensoren', 
          items: [
            "hardware/sensors/temperatur-luftfeuchte", 
            "hardware/sensors/mpu6050", 
            "hardware/sensors/feinstaub-sps30", 
            "hardware/sensors/distanz"
          ]
        }, 
        {
          type: 'doc', 
          label: "Pflegehinweise für die senseBox:bike", 
          id: 'products/bike/misc/care'
        }, 
        {
          type:'doc', 
          label: 'Fehlerbehebung',
          id: 'products/bike/misc/errors' 
        }
    ]
  }


  export default bikeSidebar;