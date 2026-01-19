import { PopoverTrigger } from "@radix-ui/react-popover";

const ButtonWithText = ({ href, title, ...props }) => (
  <PopoverTrigger asChild>
    <button 
      type="button" 
      className="bg-gradient-to-r  from-green to-green hover:from-green-2 hover:to-green-2 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out"
      {...props}
    >
      {title}
    </button>
  </PopoverTrigger>
);

export default ButtonWithText;