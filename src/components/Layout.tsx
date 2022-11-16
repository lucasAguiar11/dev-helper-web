import { HTMLAttributes } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Metadata } from './Metadata'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Metadata />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
