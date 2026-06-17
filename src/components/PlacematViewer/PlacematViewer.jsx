import React from 'react';

const PlacematViewer = ({ placemats }) => {
  const [currentPlacematIndex, setCurrentPlacematIndex] = React.useState(0);
  const [currentSide, setCurrentSide] = React.useState(1);
  
  const currentPlacemat = placemats[currentPlacematIndex];
  
  const nextPlacemat = () => {
    setCurrentPlacematIndex((prev) => (prev + 1) % placemats.length);
    setCurrentSide(1);
  };
  
  const prevPlacemat = () => {
    setCurrentPlacematIndex((prev) => (prev - 1 + placemats.length) % placemats.length);
    setCurrentSide(1);
  };
  
  const goToPlacemat = (index) => {
    setCurrentPlacematIndex(index);
    setCurrentSide(1);
  };
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Header with Title and Page Selection */}
      <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentPlacemat.title}</h3>
          
          {/* Page Selection Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentSide(1)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentSide === 1 
                  ? 'bg-green text-white shadow-md font-semibold'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Vorderseite
            </button>
            <button 
              onClick={() => setCurrentSide(2)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentSide === 2 
                  ? 'bg-green text-white shadow-md font-semibold'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Rückseite
            </button>
          </div>
        </div>
      </div>

      {/* Image Container with Navigation */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 relative">
        {/* Previous Button */}
        <button
          onClick={prevPlacemat}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Vorheriges Placemat"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <div className="flex items-center justify-center min-h-[500px]">
          <img 
            src={currentSide === 1 ? currentPlacemat.side1 : currentPlacemat.side2} 
            alt={`${currentPlacemat.title} Seite ${currentSide}`} 
            className="max-w-full max-h-[600px] object-contain rounded-lg shadow-md transition-opacity duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextPlacemat}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Nächstes Placemat"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Placemat Counter */}
        <div className="absolute top-4 right-4 z-20 bg-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
          {currentPlacematIndex + 1} / {placemats.length}
        </div>
      </div>

      {/* Placemat Indicators */}
      <div className="flex justify-center gap-2 p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex-wrap">
        {placemats.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPlacemat(index)}
            className={`transition-all duration-300 rounded-full px-4 py-2 font-medium ${
              currentPlacematIndex === index
                ? 'bg-green text-white shadow-md scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {placemats[index].title}
          </button>
        ))}
      </div>

      {/* Footer with Download Button */}
      <div className="p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
        <a 
          href={currentPlacemat.downloadUrl} 
          download 
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-green text-white rounded-lg font-semibold transition-opacity duration-200 hover:opacity-90"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>{currentPlacemat.title} herunterladen</span>
        </a>
      </div>
    </div>
  );
};

export default PlacematViewer;
