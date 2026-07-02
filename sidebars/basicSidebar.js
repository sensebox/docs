/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const basicSidebar = {
  type: 'category',
  label: 'basic',
  key: 'basic',
  link: {
    type: 'doc',
    id: 'products/basic/basic-overview',
  },
  items: [
    {
      type: 'category',
      label: 'Erste Schritte',
	  key: 'basic-gettingStarted',
      items: [
        'boards/mcus2/mcus2-in-betrieb-nehmen',
        'products/basic/basic-erste-schritte',
      ],
    },
    {
      type: 'category',
      label: 'App',
    key: 'basic-app',
    items:[
      'products/basic/app/basic-app-erste-schritte',
    ]
    },
    {
      type: 'category',
      label: 'Hardware',
	  key: 'basic-hardware',
      items: [
        'hardware/sensors/umweltsensor',
        'hardware/accessoires/display',
        'hardware/bee/bluetooth-bee',
        'hardware/sensors/umweltsensor',
        'hardware/accessoires/rgb-led',
      ],
    },
    {
      type: 'doc',
      id: 'products/basic/basic-materialien',
      label: 'Materialien',
    },
  ],
}

export default basicSidebar;
