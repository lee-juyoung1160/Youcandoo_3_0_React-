import WebviewLayout from '../../../../../components/webview/Layout'
import {NOTICE, FIXED} from '../../../../../utils/constant'
import Image from 'next/image'
import styles from '../../../../../styles/layout/_app_detail.module.scss'

export default function Detail({data}) {
  const {title, contents, notice_image_url, created} = data.data
  return (
    <section className={styles.service_detail}>
      <div className={styles.service_detail__info}>
        <p>{title}</p>
        <span>{created}</span>
      </div>
      <div className={styles.service_detail__contents}>
        {notice_image_url && (
          <div className={styles.contents__img}>
            <Image
              src={notice_image_url}
              alt="공지사항 상세 이미지"
              width={640}
              height={640}
              layout="responsive"
            />
          </div>
        )}
        <div className={styles.contents__text}>{contents}</div>
      </div>
    </section>
  )
}

Detail.getLayout = function getLayout(page) {
  const props = {headers: {title: NOTICE, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getServerSideProps(context) {
  const options = {
    method: 'GET',
  }
  const idx = context.params.idx
  const res = await fetch(process.env.DETAIL_NOTICE + idx, options)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
