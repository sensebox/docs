const eduSidebar =   {
  type: 'category', 
  label: ':edu', 
  link:{
    type: 'doc', 
    id: 'mcu/mcu-overview',
  }, 
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
      items: [
        'mcu/mcu-revisions'
      ]
    }, 
    {
      type: 'category', 
      label: 'Hardware', 
      collapsible: false,
      link: {
        type : 'generated-index',
        title: 'Hardware',
        slug: '/hardware/edu',
      },
      items: [
        'hardware/bee/wifi-bee',
        'hardware/bee/sd-bee',
        'hardware/sensors/temperatur-luftfeuchte',
        'hardware/sensors/helligkeit-uv',
        'hardware/sensors/distanz',
        'hardware/sensors/mikro',
        'hardware/sensors/luftdruck-temperatur',
        'hardware/accessoires/display'
      ]
    }
  ]
}
  
export default eduSidebar;
  