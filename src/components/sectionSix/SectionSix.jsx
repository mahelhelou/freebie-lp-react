import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './sectionSix.scss'

// import required modules
import { Pagination } from 'swiper'
const SectionSix = () => {
  return (
    <div className='container m-auto'>
      <div className='section-six'>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'>
          <SwiperSlide>
            <img src='./assets/images/icons/1.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/2.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/3.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/4.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/5.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/1.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/2.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/3.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/4.png' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='./assets/images/icons/5.png' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SectionSix
