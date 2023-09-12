import {useState} from 'react'
import Router from 'next/router'
import WebviewLayout from '../../../../../components/webview/Layout'
import {INQUIRY, FIXED} from '../../../../../utils/constant'
import Image from 'next/image'
import styles from '../../../../../styles/layout/_app_detail.module.scss'
import {getErrorMessage} from '../../../../../utils/utils'

export default function Detail({data}) {
  if (data.status === 20254) {
    alert(getErrorMessage(data.status))
    Router.push('/webview/v3.0/qna')
  }

  const {title, contents, created, status, attach, answer, answered} = data.data
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [selectedImage, setSelectedImage] = useState(
    attach && attach.length > 0 ? attach[0].contents_url : ''
  )

  const handleClickImage = (imageUrl) => {
    setSelectedImage(imageUrl)
  }

  return (
    <section className={styles.qna_detail}>
      <div className={styles.qna_detail__info}>
        <div className={styles.title}>
          <span>{created}</span>
          <strong>{title}</strong>
        </div>
        <span
          className={`${styles.icon_answer} ${
            status === '대기' ? '' : styles.complete
          }`}>
          {status}
        </span>
      </div>
      <div className={styles.qna_detail__contents}>
        <div className={styles.contents__text}>{contents}</div>
        {attach && attach.length > 0 && (
          <div className={styles.contents__file}>
            {attach.map((attachment, index) => (
              <button
                key={attachment.contents_url}
                type="button"
                className={`${styles.btn_file} ${
                  selectedIdx === index ? styles.active : ''
                }`}
                onClick={() => {
                  setSelectedIdx(index)
                  handleClickImage(attachment.contents_url)
                }}>
                첨부파일
              </button>
            ))}
            <div className={styles.free_view_wrap}>
              <Image src={selectedImage} alt="1:1문의 첨부파일" layout="fill" />
            </div>
          </div>
        )}
      </div>

      {answer && (
        <div className={styles.qna_detail__answer}>
          <div className={styles.title}>
            <span>{answered}</span>
            <strong>답변</strong>
          </div>
          <div className={styles.contents__text}>{answer}</div>
        </div>
      )}
    </section>
  )
}

Detail.getLayout = function getLayout(page) {
  const props = {headers: {title: INQUIRY, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getServerSideProps(context) {
  const options = {
    method: 'GET',
  }
  const idx = context.params.idx
  const res = await fetch(process.env.DETAIL_INQUIRY + idx, options)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
