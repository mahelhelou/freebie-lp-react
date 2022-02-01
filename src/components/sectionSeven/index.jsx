import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import './sectionSeven.scss'

const index = () => {
  return (
    <div className='section-seven'>
      <div className='items'>
        <h3>Trusted by Thousands of Happy Customer</h3>
        <p>
          These are the stories of our customers who have joined us with great pleasure when using
          this crazy feature.
        </p>
        <div className='slider'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'>
            {/* item */}
            <SwiperSlide>
              <div className='card-container'>
                <div className='slider-card d-flex flex-column align-items-center justify-content-center'>
                  <div className='seg'>
                    <div className='left'>
                      <div className='img'>
                        <img src='./assets/images/people/1.png' alt='123' />
                      </div>
                      <div className='name'>
                        <span>Viezh Robert</span>
                        <span>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='right'>
                      <span>4.5</span>
                      <span>
                        <img src='./assets/images/star.png' alt='256' />
                      </span>
                    </div>
                  </div>
                  <div className='seg'>
                    <p>
                      “Wow... I am very happy to use this VPN, it turned out to be more than my
                      expectations and so far there have been no problems. LaslesVPN always the
                      best”.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* item  */}
            {/* item */}
            <SwiperSlide>
              <div className='card-container'>
                <div className='slider-card d-flex flex-column align-items-center justify-content-center'>
                  <div className='seg'>
                    <div className='left'>
                      <div className='img'>
                        <img src='./assets/images/people/2.png' alt='123' />
                      </div>
                      <div className='name'>
                        <span>Yessica Christy</span>
                        <span>Shanxi, China</span>
                      </div>
                    </div>
                    <div className='right'>
                      <span>4.5</span>
                      <span>
                        <img src='./assets/images/star.png' alt='256' />
                      </span>
                    </div>
                  </div>
                  <div className='seg'>
                    <p>
                      “I like it because I like to travel far and still can connect with high
                      speed.”.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* item  */}
            {/* item */}
            <SwiperSlide>
              <div className='card-container'>
                <div className='slider-card d-flex flex-column align-items-center justify-content-center'>
                  <div className='seg'>
                    <div className='left'>
                      <div className='img'>
                        <img src='./assets/images/people/3.png' alt='123' />
                      </div>
                      <div className='name'>
                        <span>Kim Young Jou</span>
                        <span>Seoul, South Korea</span>
                      </div>
                    </div>
                    <div className='right'>
                      <span>4.5</span>
                      <span>
                        <img src='./assets/images/star.png' alt='256' />
                      </span>
                    </div>
                  </div>
                  <div className='seg'>
                    <p>
                      “This is very unusual for my business that currently requires a virtual
                      private network that has high security.”.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* item  */}
            {/* item */}
            <SwiperSlide>
              <div className='card-container'>
                <div className='slider-card d-flex flex-column align-items-center justify-content-center'>
                  <div className='seg'>
                    <div className='left'>
                      <div className='img'>
                        <img src='./assets/images/people/1.png' alt='123' />
                      </div>
                      <div className='name'>
                        <span>Viezh Robert</span>
                        <span>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className='right'>
                      <span>4.5</span>
                      <span>
                        <img src='./assets/images/star.png' alt='256' />
                      </span>
                    </div>
                  </div>
                  <div className='seg'>
                    <p>
                      “Wow... I am very happy to use this VPN, it turned out to be more than my
                      expectations and so far there have been no problems. LaslesVPN always the
                      best”.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* item  */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default index
