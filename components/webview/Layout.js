import React from 'react'
import Head from 'next/head'
import FadeHeader from './FadeHeader'
import FixedHeader from './FixedHeader'
import styles from '../../styles/layout/_app_header.module.scss'

function WebviewLayout({children, headers}) {
  const buildHeader = () => {
    switch (headers.headerType) {
      case 'fade':
        return <FadeHeader {...headers} />
      default:
        return <FixedHeader {...headers} />
    }
  }

  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=contain"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>유캔두</title>
      </Head>
      {buildHeader()}
      <main className={styles.only_m}>{children}</main>
    </React.Fragment>
  )
}

export default WebviewLayout
