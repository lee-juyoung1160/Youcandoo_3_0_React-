import React from 'react'
import Heads from './Heads'
import Header from './Header'
import Footer from './Footer'

function WebLayout({children, headerType}) {
  return (
    <React.Fragment>
      <Heads />
      <Header headerType={headerType} />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default WebLayout
