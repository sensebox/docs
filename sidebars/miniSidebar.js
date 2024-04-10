
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
        items:[
          'hardware/sensors/bmx055']
              }
    ]
  }

export default miniSidebar;