import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-inner border">
        <input
          {...props}
          type="text"
          className="
            block w-full rounded-md border-gray-300 px-2
          focus:border-secondary/50 focus:ring-secondary/50 
            sm:text-xl h-9 text-gray-800 placeholder:text-gray-300" 
        />
      </div>
    </div>
  )
}
