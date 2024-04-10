const bikeSidebar = {
    type: 'category', 
    label: ':bike', 
    link: {
      type : 'generated-index',
    },
    items: [
      {
        type: 'category', 
        label: 'Hardware', 
        link: {
          type : 'generated-index',
          title: 'Hardware',
        },
        items: 
        // generate items from bikeHardware variable
        // map over each item in bikeHardware and return an object lookin like this {type: 'ref', id: 'hardware/id'} with the item
        [
            'hardware/sensors/temperatur-luftfeuchte',
        ]
        }, 
        {
          type:'category', 
          label: 'App', 
          items: ["bike/app/ersteschritteapp"]
        }
    ]
  }

  export default bikeSidebar;