import { tv } from 'tailwind-variants'

const profileCard = tv({
  slots: {
    base: 'md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900',
    avatar: 'w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg',
    wrapper: 'flex-1 pt-6 md:p-8 text-center md:text-left space-y-4',
    description: 'text-md font-medium text-gray-700 dark:text-gray-300',
    infoWrapper: 'font-medium',
    name: 'text-sm text-sky-500 dark:text-sky-400',
    role: 'text-sm text-slate-700 dark:text-slate-500'
  },
  variants: {
    color: {
      blue: {
        base: 'bg-blue-50 dark:bg-blue-900/20',
        name: 'text-blue-500 dark:text-blue-400',
        role: 'text-blue-700 dark:text-blue-300'
      },
      purple: {
        base: 'bg-purple-50 dark:bg-purple-900/20',
        name: 'text-purple-500 dark:text-purple-400',
        role: 'text-purple-700 dark:text-purple-300'
      }
    },
    size: {
      sm: {
        avatar: 'w-20 h-20 md:w-32',
        wrapper: 'pt-4 md:p-6',
        description: 'text-sm',
        name: 'text-xs',
        role: 'text-xs'
      },
      md: {
        avatar: 'w-24 h-24 md:w-48',
        wrapper: 'pt-6 md:p-8',
        description: 'text-base',
        name: 'text-sm',
        role: 'text-sm'
      },
      lg: {
        avatar: 'w-32 h-32 md:w-56',
        wrapper: 'pt-8 md:p-10',
        description: 'text-lg',
        name: 'text-base',
        role: 'text-base'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'blue'
  }
})

interface ProfileCardProps {
  imageSrc: string
  name: string
  role: string
  description: string
  color?: 'blue' | 'purple'
  size?: 'sm' | 'md' | 'lg'
}

export const ProfileCard = ({ 
  imageSrc, 
  name, 
  role, 
  description,
  color,
  size 
}: ProfileCardProps) => {
  const {
    base,
    avatar,
    wrapper,
    description: descriptionSlot,
    infoWrapper,
    name: nameSlot,
    role: roleSlot
  } = profileCard({ color, size })

  return (
    <figure className={base()}>
      <img
        className={avatar()}
        src={imageSrc}
        alt={`Profile picture of ${name}`}
        width="384"
        height="512"
      />
      <div className={wrapper()}>
        <blockquote>
          <p className={descriptionSlot()}>
            {description}
          </p>
        </blockquote>
        <figcaption className={infoWrapper()}>
          <div className={nameSlot()}>{name}</div>
          <div className={roleSlot()}>{role}</div>
        </figcaption>
      </div>
    </figure>
  )
} 