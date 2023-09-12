import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import WebviewLayout from '../../../../components/webview/Layout'
import {NOTICE, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_notice.module.scss'
import NoResult from '../../../../components/webview/NoResult'

const NoticeItem = (props) => {
  const {idx, title, created} = props.item
  useEffect(() => {
    document.querySelector('body').classList.add('body')
  })

  return (
    <li>
      <a onClick={() => Router.push(`/webview/v3.0/notice/detail/${idx}`)}>
        상세보기
      </a>
      <div className={styles.notice_list__info}>
        <p>{title}</p>
        <span>{created}</span>
      </div>
    </li>
  )
}

export default function Notice({data}) {
  const [notices, setNotices] = useState(data.data.list)
  return (
    <section className={styles.notice_list}>
      {notices && notices.length > 0 ? (
        notices.map((notice) => (
          <ul key={notice.notice_uuid}>
            <NoticeItem item={notice} />
          </ul>
        ))
      ) : (
        <NoResult url={IMAGE_URL.emptyNotice}>공지사항이 없어요</NoResult>
      )}
    </section>
  )
}

Notice.getLayout = function getLayout(page) {
  const props = {headers: {title: NOTICE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getStaticProps(context) {
  const options = {
    method: 'GET',
  }
  const resp = await fetch(process.env.NOTICES, options)
  const data = await resp.json()

  return {
    props: {
      data,
    },
  }
}
