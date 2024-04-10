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
  