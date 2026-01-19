import { PopoverTrigger } from "@radix-ui/react-popover";

const HardwareFeatures = ({ href, title, ...props }) => (
  <PopoverTrigger asChild>
    <button 
      type="button" 
         className="bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-md"
              >
      {...props}
    
      {title}
    </button>
  </PopoverTrigger>
);

export default HardwareFeatures;