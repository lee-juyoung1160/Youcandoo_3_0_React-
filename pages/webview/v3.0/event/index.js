import React, {useState, useEffect} from 'react'
import WebviewLayout from '../../../../components/webview/Layout'
import Image from 'next/image'
import Router from 'next/router'
import {EVENT, FIXED, IMAGE_URL} from '../../../../utils/constant'
import styles from '../../../../styles/page/_app_event.module.scss'
import NoResult from '../../../../components/webview/NoResult'

const EventItem = (props) => {
  const {
    idx,
    title,
    thumbnail_image_url,
    start_date,
    end_date,
    status,
    event_type,
    link_url,
    created,
  } = props.item

  const detailUrl =
    event_type === '링크' ? link_url : `/webview/v3.0/event/detail/${idx}`
  const endEventStyle = status === '종료' ? styles.event_off : ''
  const eventDate = event_type
    ? `${start_date} ~ ${end_date}`
    : created.slice(0, 10)

  return (
    <div className={`${styles.list_contents__box} ${endEventStyle}`}>
      <div className={styles.thumbnail}>
        <Image src={thumbnail_image_url} alt="이벤트 썸네일" layout="fill" />
        {status && (
          <span>
            <i></i>
            {status}
          </span>
        )}
      </div>
      <div className={styles.info}>
        <p>{title}</p>
        <span>{eventDate}</span>
      </div>
      {status !== '종료' ? (
        <a onClick={() => Router.push(detailUrl)}>상세보기</a>
      ) : (
        <a onClick={(e) => alert('종료된 이벤트입니다.')}>상세보기</a>
      )}
    </div>
  )
}

export default function Event({progressData, endData, announceData}) {
  const [events, setEvents] = useState(progressData.data.list)
  const [activeBtnIdx, setActiveBtnIdx] = useState(0)
  const [endEventCount, setEndEventCount] = useState(endData.data.list.length)
  const [viewEndEvent, setViewEndEvent] = useState(false)

  useEffect(() => {
    document.querySelector('body').classList.add('body')
    const tabIdx = sessionStorage.getItem('event_tab_idx') ?? 0
    handleClickTab(Number(tabIdx))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClickTab = (idx) => {
    sessionStorage.setItem('event_tab_idx', idx)
    setActiveBtnIdx(idx)
    setViewEndEvent(false)
    switch (idx) {
      case 1:
        setEvents(announceData.data.list)
        setEndEventCount(0)
        break
      default:
        setEvents(progressData.data.list)
        setEndEventCount(endData.data.list.length)
        break
    }
  }

  const handleClickViewEndEvent = () => {
    setEndEventCount(0)
    setViewEndEvent(true)
  }

  return (
    <section className={styles.event_list}>
      <div className={styles.list_tab}>
        <button
          onClick={() => handleClickTab(0)}
          className={activeBtnIdx === 0 ? styles.active : ''}
          type="button">
          이벤트
        </button>
        <button
          onClick={() => handleClickTab(1)}
          className={activeBtnIdx === 1 ? styles.active : ''}
          type="button">
          결과발표
        </button>
      </div>

      <article className={styles.list_contents}>
        {events && events.length > 0
          ? events.map((eventItem) => (
              <EventItem key={eventItem.idx} item={eventItem} />
            ))
          : !viewEndEvent && (
              <NoResult url={IMAGE_URL.emptyEvent}>
                이벤트를 준비 중이에요
              </NoResult>
            )}
        {viewEndEvent &&
          endData.data.list.map((endEventItem) => (
            <EventItem key={endEventItem.idx} item={endEventItem} />
          ))}
      </article>

      {endEventCount > 0 && (
        <button onClick={(e) => handleClickViewEndEvent()} type="button">
          지난 이벤트 보기 &gt;
        </button>
      )}
    </section>
  )
}

Event.getLayout = function getLayout(page) {
  const props = {headers: {title: EVENT, headerType: FIXED}}
  return <WebviewLayout {...props}>{page}</WebviewLayout>
}

export async function getStaticProps(context) {
  const options = {
    method: 'GET',
  }
  const progressRes = await fetch(process.env.PROGRESS_EVENTS, options)
  const progressData = await progressRes.json()

  const endRes = await fetch(process.env.END_EVENTS, options)
  const endData = await endRes.json()

  const announceRes = await fetch(process.env.ANNOUNCE_EVENTS, options)
  const announceData = await announceRes.json()

  return {
    props: {
      progressData,
      endData,
      announceData,
    },
  }
}
