import { tv } from 'tailwind-variants'

export const button = tv({
  base: "font-semibold text-white py-2 px-4 rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-700",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    }
  },
  compoundVariants: [
    {
      color: "primary",
      size: "lg",
      class: "uppercase tracking-wider"
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary"
  }
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "success"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
}

export const Button = ({ 
  children, 
  color, 
  size, 
  disabled,
  className,
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={button({ color, size, disabled, className })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
} 