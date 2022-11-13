import { HTMLAttributes } from 'react'
import Header from './Header'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
