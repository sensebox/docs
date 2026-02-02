
export function NavGreen({ topTabs, activeTab, onTabChange }) {
  return (
    <div className="bg-green text-white font-medium p-1 rounded-xl shadow-lg dark:bg-emerald-800 dark:text-white">
      <nav>
        <ul className="flex flex-row flex-wrap list-none p-0 m-0">
          {topTabs.map((tab) => (
            <li key={tab} className="!m-0 flex-shrink-0">
              <button
                onClick={() => onTabChange(tab)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-green-3 rounded-xl text-green-700 shadow-md dark:bg-green-600 dark:text-green-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10 rounded-xl dark:text-gray-200 dark:hover:bg-white/10'
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
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-1 mb-8 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200">
      <nav>
        <ul className="flex flex-row flex-wrap list-none p-0 m-0">
          {bottomTabs.map((tab) => (
            <li key={tab} className="!m-0 flex-shrink-0">
              <button
                onClick={() => onTabChange(tab)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-green-3 bg-green-50 dark:bg-emerald-700 dark:text-white rounded-xl '
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl dark:text-gray-200 dark:hover:bg-gray-800'
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

export function NavBlocks({ href, title }) { 
  return (
    <a 
      href={href}
      className="!no-underline hover:!no-underline active:!no-underline bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-3 md:p-6 text-center transition-all duration-200 hover:shadow-md block dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
    >
      <h3 className="font-medium  !no-underline">{title}</h3>
    </a>
  );
}
