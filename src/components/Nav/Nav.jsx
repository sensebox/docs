
export function NavGreen({ topTabs, activeTab, onTabChange }) {
  return (
    <div className="   p-1 rounded-xl ">
      <nav>
        <ul className="flex flex-row flex-wrap list-none gap-2 p-0 m-0">
          {topTabs.map((tab) => (
            <li key={tab} className="!m-0 flex-shrink-0">
              <button
                onClick={() => onTabChange(tab)}
                className={`px-4 py-3 bg-green dark:bg-emerald-500 rounded-lg font-bold text-white  hover:text-white border-none  '`}
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
    <div className="bg-white border border-gray-200 rounded-xl  p-1 mb-8 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200">
      <nav>
        <ul className="flex flex-row flex-wrap list-none gap-2 p-0 m-0">
          {bottomTabs.map((tab) => (
            <li key={tab} className="!m-0 flex-shrink-0">
              <button
                onClick={() => onTabChange(tab)}
                className={`px-4 py-3 rounded-lg  transition-all duration-200 border-none ${
                  activeTab === tab
                    ? 'text-[#45beed] border border-[#45beed] font-extrabold bg-green-50 dark:bg-emerald-700 dark:text-white rounded-xl '
                    : 'text-gray-700 font-medium hover:text-gray-900 hover:bg-gray-100 rounded-xl dark:text-gray-200 dark:hover:bg-gray-800'
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
      className="flex flex-col justify-center  align-middle !no-underline hover:!no-underline active:!no-underline bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-3 md:p-6 text-center transition-all duration-200 hover:shadow-md  dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
    >
      <h3 className="font-medium text-center text-green m-0 !no-underline">{title}</h3>
    </a>
  );
}
