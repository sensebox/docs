import React from 'react';

export function NavGreen({ topTabs, activeTab, onTabChange }) {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl shadow-lg mb-6 p-1">
      <nav>
        <ul className="flex flex-row list-none p-0 m-0">
          {topTabs.map((tab) => (
            <li key={tab} className="flex-1">
              <button
                onClick={() => onTabChange(tab)}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white/90 text-green-700 shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}


export function NavWhite({ bottomTabs, activeTab, onTabChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-1 mb-8">
      <nav>
        <ul className="flex flex-row flex-wrap list-none p-0 m-0">
          {bottomTabs.map((tab) => (
            <li key={tab} className="flex-shrink-0">
              <button
                onClick={() => onTabChange(tab)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export function MCUNavigationContainer() {
  const [activeTopTab, setActiveTopTab] = React.useState('Pinout');
  const [activeBottomTab, setActiveBottomTab] = React.useState('Features');

  const topTabs = ['Pinout', 'DataSheet', 'I2C/Wire Ports', 'Digitale/Analoge Ports'];
  const bottomTabs = ['Features', 'Hardware', 'Tech Specs', 'Compatibility', 'Blockly', 'Arduino', 'CircuitPython'];

  return (
    <>
      <NavGreen 
        topTabs={topTabs}
        activeTab={activeTopTab}
        onTabChange={setActiveTopTab}
      />
      
      <NavWhite 
        bottomTabs={bottomTabs}
        activeTab={activeBottomTab}
        onTabChange={setActiveBottomTab}
      />

      {/* Hier kannst du basierend auf den aktiven Tabs Inhalte anzeigen */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">
          {activeTopTab} → {activeBottomTab}
        </h2>
        
        {activeTopTab === 'Pinout' && activeBottomTab === 'Features' && (
          <div>
            <h3 className="text-xl font-bold mb-4">I2C/Wire Daisy Chain</h3>
            <p className="text-gray-700 mb-4">
              Eine I2C-Daisy-Chain ermöglicht die einfache und effiziente Verbindung mehrerer Geräte 
              in einer seriellen Kommunikationskette unter Verwendung des I2C-Protokolls.
            </p>
          </div>
        )}

        {activeTopTab === 'Pinout' && activeBottomTab === 'Hardware' && (
          <div className="grid grid-cols-2 gap-4">
          </div>
        )}
      </div>
    </>
  );
}