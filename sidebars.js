import glossarSidebar from './sidebars/glossarSidebar';

const eduSidebar = require('./sidebars/eduSidebar');
const eduS2Sidebar = require('./sidebars/eduS2Sidebar');
const bikeSidebar = require('./sidebars/bikeSidebar');
const homeSidebar = require('./sidebars/homeSidebar');
const trafficLightSidebard = require('./sidebars/trafficLightSidebar');
const miniSidebar = require('./sidebars/miniSidebar');
const blocklySidebar = require ('./sidebars/blocklySidebar');

export default {
  senseBoxSidebar: 
    [
      eduS2Sidebar,
      eduSidebar,
      blocklySidebar, 
      glossarSidebar
    ]
}

