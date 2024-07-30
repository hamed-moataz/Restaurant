import './Home.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// ==================== img =================
import home1 from '../../assets/img/home/slide1-01.jpg'
import home2 from '../../assets/img/home/master-slides-01.jpg'
import home3 from '../../assets/img/home/master-slides-02.jpg'
import welcome from '../../assets/img/home/our-story-01.jpg'
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section className='home'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={home1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={home2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={home3} alt="" /></SwiperSlide>
     
    
      </Swiper>
      </section>
      <div className="welcome">
        <div className="w-left">
          <p>Italian Restaurant
          </p>
          <h1>Welcome</h1>
          <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.

</p>
    <NavLink to='/'>QUR STORY</NavLink>
        </div>
        <div className="w-right">
          <img src={welcome} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
