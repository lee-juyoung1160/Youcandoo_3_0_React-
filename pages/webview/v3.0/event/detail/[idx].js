import Image from 'next/image'
import WebviewLayout from '../../../../../components/webview/Layout'
import {EVENT, FIXED, IMAGE_URL} from '../../../../../utils/constant'
import styles from '../../../../../styles/layout/_app_detail.module.scss'

export default function Detail({data}) {
  const {
    event_type,
    title,
    image_url,
    contents,
    notice,
    start_date,
    end_date,
    created,
  } = data.data
  const eventDate =
    event_type === '결과발표'
      ? created.slice(0, 10)
      : `${start_date} ~ ${end_date}`
  return (
    <section className={styles.service_detail}>
      <div className={`${styles.service_detail__info} ${styles.text_center}`}>
        {event_type === '결과발표' && <strong>[결과발표]</strong>}
        <p>{title}</p>
        <span>{eventDate}</span>
      </div>
      <div className={styles.service_detail__contents}>
        <div className={styles.contents__img}>
          <Image
            src={image_url}
            alt="이벤트 상세 이미지"
            width={640}
            height={640}
            layout="responsive"
          />
        </div>
        <div className={styles.contents__text}>{contents}</div>
      </div>
      <div className={styles.footer}>
        <h5>
          <Image
            src={IMAGE_URL.tipIcon}
            alt="event tip icon"
            width={20}
            height={20}
          />
          <strong>꼭 확인해주세요.</strong>
        </h5>
        <p>{notice}</p>
      </div>
    </section>
  )
}

Detail.getLayout = function getLayout(page) {
  const props = {headers: {title: EVENT, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getServerSideProps(context) {
  const options = {
    method: 'GET',
  }
  const idx = context.params.idx
  const res = await fetch(process.env.DETAIL_EVENT + idx, options)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
