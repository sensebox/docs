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
        'boards/eye/eye-in-betrieb-nehmen',
        'boards/eye/eye-erster-sketch',
        'boards/eye/eye-kompilieren',
      ],
    },
    {
      type: 'category',
      label: 'Hardware',
	  key: 'basic-hardware',
      items: [
        'hardware/eye/camera',
        'hardware/eye/icm20948',
        'hardware/eye/rgb-led-esp32',
        'hardware/eye/wifi',
        'hardware/eye/ble',
        'hardware/eye/lora',
        'hardware/eye/sd',
        'hardware/eye/button',
        'boards/eye/eye-ports-and-pins'
      ],
    },
  ],
}

export default basicSidebar;
