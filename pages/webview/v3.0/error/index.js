import React, {useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import {EMPTY, FIXED, IMAGE_URL} from '../../../../utils/constant'
import NoResult from '../../../../components/webview/NoResult'

export default function Error() {
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })
  return (
    <section>
      <NoResult
        url={IMAGE_URL.networkError}
        desc="네트워크 상태를 확인해주세요.">
        일시적인 오류로 <br /> 페이지를 불러오지 못했어요.
      </NoResult>
    </section>
  )
}

Error.getLayout = function getLayout(page) {
  const props = {headers: {title: EMPTY, type: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}
