import glossarSidebar from './sidebars/glossarSidebar'

const eduSidebar = require('./sidebars/eduSidebar')
const eduS2Sidebar = require('./sidebars/eduS2Sidebar')
const bikeSidebar = require('./sidebars/bikeSidebar')
const homeSidebar = require('./sidebars/homeSidebar')
const co2AmpelSidebar = require('./sidebars/co2AmpelSidebar')
const miniSidebar = require('./sidebars/miniSidebar')
const blocklySidebar = require('./sidebars/blocklySidebar')

export default {
  senseBoxSidebar: [
    eduS2Sidebar,
    eduSidebar,
    bikeSidebar,
    blocklySidebar,
    co2AmpelSidebar,
    homeSidebar,
    miniSidebar,
    glossarSidebar,
  ],
}
