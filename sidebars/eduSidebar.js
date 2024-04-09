const eduHardware = ["bee/wifi-bee", "bee/sd-bee", "temperatur-luftfeuchte", "helligkeit-uv", "distanz", "mikro", "luftdruck-temperatur", "accessoires/display"]


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
  
export default {
senseBoxSidebar: [
    eduSidebar
]
}

  