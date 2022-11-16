import { ReactNode } from 'react'

type ButtonProps = {
  label: string
  onClick: () => void
  icon?: ReactNode
}

export const Button = ({ label, onClick, icon }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="
        group relative flex w-full 
        justify-center rounded-md border border-transparent 
        bg-secondary py-2 px-4 text-sm font-medium text-white 
        hover:bg-secondary/80 focus:outline-none focus:ring-2
        focus:ring-secondary focus:ring-offset-2
      "
    >
      {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</span>}
      {label}
    </button>
  )
}
