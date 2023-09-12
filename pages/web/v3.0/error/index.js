import React, {useEffect} from 'react'
import WebLayout from '../../../../components/web/Layout'
import Image from 'next/image'

export default function Web404() {
  useEffect(() => {
    document.documentElement.classList.add('html')
  }, [])
  const section = {
    width: '100%',
    height: 'calc(100vh - 253px)',
    position: 'relative',
  }
  const wrapper = {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  const title = {
    marginTop: '1rem',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  }
  return (
    <section style={section}>
      <div style={wrapper}>
        <Image
          src="https://youcandoo.yanadoocdn.com/v3/youcandoo/assets/images/icon_no_contents.svg"
          alt="404 아이콘"
          width="100"
          height="50"
        />
        <h1 style={title}>
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          페이지의 주소가 정확한지 다시 한번 확인해 주세요!
        </h1>
      </div>
    </section>
  )
}

Web404.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>
}
