import moment from 'moment'
import { DetailedHTMLProps, TimeHTMLAttributes } from 'react'

type ClockProps = DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement> & {
  date?: moment.Moment
}

export const Clock = ({ date, ...props }: ClockProps) => {
  const { className } = props
  return (
    <time
      {...props}
      className={
        `${className} flex flex-row items-center font-mono 
        text-[#00FF86] bg-gray-900  rounded-md px-2
      `}
      dateTime={date?.toISOString()}
    >
      <span className=" font-medium p-1.5 text-2xl w-6 h-11 flex justify-center items-center">
        {date == undefined ? '00' : date?.format('HH')}
      </span>
      <span className="text-2xl font-medium">:</span>
      <span className="font-medium p-1.5 text-2xl w-6 h-11 flex justify-center items-center">
        {date == undefined ? '00' : date?.format('mm')}
      </span>
      <span className="text-2xl font-medium">:</span>
      <span
        className={`p-1.5 font-medium text-2xl w-6 h-11 flex justify-center items-center
      `}
      >
        {date == undefined ? '00' : date?.format('ss')}
      </span>
      <span
        className={`p-1.5 ml-1 font-medium text-lg w-6 h-11 flex justify-center items-end
      `}
      >
        {date == undefined ? ' ' : date?.format('a')}
      </span>
    </time>
  )
}
