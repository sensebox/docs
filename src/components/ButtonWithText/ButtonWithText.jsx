const ButtonWithText = ({ href, title}) => (
    <a 
      type="button" 
      className="bg-gradient-to-r from-green to-green hover:from-green-2 hover:to-green-2 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out dark:from-emerald-700 dark:to-emerald-600 dark:hover:from-emerald-800 dark:hover:to-emerald-700"
      href = {href}
    >
      {title}
    </a>
);

export default ButtonWithText;