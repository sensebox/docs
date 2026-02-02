import { PopoverTrigger } from '@radix-ui/react-popover'

const ButtonWithText = ({ title, ...props }) => (
  <PopoverTrigger asChild>
    <button
      type="button"
      className="cursor-pointer rounded-xl bg-gradient-to-r from-green to-green px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:from-green-2 hover:to-green-2"
      {...props}
    >
      {title}
    </button>
  </PopoverTrigger>
)

export default ButtonWithText
