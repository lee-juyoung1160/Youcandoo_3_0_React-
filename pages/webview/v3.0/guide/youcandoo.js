import React, {useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {YOUCANDOO_GUIDE, FIXED} from '../../../../utils/constant'

export default function YouCanDoo() {
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })
  return (
    <div>
      <h1>YouCanDoo Guide</h1>
    </div>
  )
}

YouCanDoo.getLayout = function getLayout(page) {
  const props = {headers: {title: YOUCANDOO_GUIDE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
