import { tv } from 'tailwind-variants'

const card = tv({
  slots: {
    base: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",
    header: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
    title: "text-xl font-semibold text-gray-800 dark:text-white",
    body: "p-6",
    footer: "px-6 py-4 bg-gray-50 dark:bg-gray-900",
  },
  variants: {
    size: {
      sm: {
        base: "max-w-sm",
        header: "py-2",
        title: "text-lg",
      },
      md: {
        base: "max-w-md",
      },
      lg: {
        base: "max-w-lg",
        header: "py-6",
        title: "text-2xl",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface CardProps {
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export const Card = ({ title, children, footer, size }: CardProps) => {
  const { base, header, title: titleClass, body, footer: footerClass } = card({ size })

  return (
    <div className={base()}>
      <div className={header()}>
        <h3 className={titleClass()}>{title}</h3>
      </div>
      <div className={body()}>{children}</div>
      {footer && <div className={footerClass()}>{footer}</div>}
    </div>
  )
} 