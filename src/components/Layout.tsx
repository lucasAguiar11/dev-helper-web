import { HTMLAttributes } from 'react'
import Header from './Header'
import { Metadata } from './Metadata'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Metadata />
      <Header />
      {children}
    </>
  )
}

export default Layout
