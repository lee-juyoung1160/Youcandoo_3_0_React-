import {Swiper, SwiperSlide} from 'swiper/react'
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {Autoplay, Pagination, Navigation} from 'swiper/core'
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export default function Swipe() {
  return (
    <Swiper
      style={{width: '60.56vw', height: '81.94vw'}}
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="">
      <SwiperSlide>1번</SwiperSlide>
      <SwiperSlide>2번</SwiperSlide>
      <SwiperSlide>3번</SwiperSlide>
    </Swiper>
  )
}
