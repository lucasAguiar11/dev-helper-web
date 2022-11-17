import { DetailedHTMLProps, InsHTMLAttributes, useEffect } from 'react'

type AdProps = {
  slotId: string
  width?: number
  height?: number
} & DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>

const Ad = ({ slotId, ...props }: AdProps) => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  const { className } = props
  return (
    <ins
      {...props}
      className={`adsbygoogle ${className}`}
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export default Ad
