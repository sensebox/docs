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
        items:[
            'hardware/sensors/temperatur-luftfeuchte',

        ]
      }
    ]
  }

export default homeSidebar;