const bikeSidebar = {
    type: 'category', 
    label: ':bike',
	key: 'bike', 
    link: {
    type: "doc",
    id: "products/bike/bike-overview",
    },
    items: [
      {
        type:'doc', 
        label: 'Halterung', 
		key: 'bike-holder',
        id: 'products/bike/halterung/installation'
      },
        {
          type:'category', 
          label: 'App',
		  key: 'bike-app', 
          items: [
            "products/bike/app/download", 
            "products/bike/app/benutzung",
          ]
        },
        {
          type:'category', 
          label: 'Sensoren',
		  key: 'bike-sensors', 
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
		  key: 'bike-care',
          id: 'products/bike/misc/care'
        }, 
        {
          type:'doc', 
          label: 'Fehlerbehebung',
		  key: 'bike-errors',
          id: 'products/bike/misc/errors' 
        }
    ]
  }


  export default bikeSidebar;