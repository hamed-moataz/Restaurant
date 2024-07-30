import "./Home.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// ==================== img =================
import home1 from "../../assets/img/home/slide1-01.jpg";
import home2 from "../../assets/img/home/master-slides-01.jpg";
import home3 from "../../assets/img/home/master-slides-02.jpg";
import welcome from "../../assets/img/home/our-story-01.jpg";
import card1 from "../../assets/img/home/intro-01.jpg";
import card2 from "../../assets/img/home/intro-02.jpg";
import card3 from "../../assets/img/home/intro-04.jpg";
import menu1 from "../../assets/img/menu/our-menu-01.jpg";
import menu2 from "../../assets/img/menu/our-menu-05.jpg";
import menu3 from "../../assets/img/menu/our-menu-08.jpg";
import menu4 from "../../assets/img/menu/our-menu-10.jpg";
import menu5 from "../../assets/img/menu/our-menu-13.jpg";
import menu6 from "../../assets/img/menu/our-menu-16.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home1} alt="" />
            <div className="content">
              <span>welcome to</span>
              <h1>pato place</h1>
              <button>look menu</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home2} alt="" />
            <div className="content">
              <span>welcome to</span>
              <h1>pato place</h1>
              <button>look menu</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home3} alt="" />
            <div className="content">
              <span>welcome to</span>
              <h1>pato place</h1>
              <button>look menu</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="welcome">
        <div className="w-left">
          <span>Italian Restaurant</span>
          <h1>Welcome</h1>
          <p>
            Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
            fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
            facilisis ligula sem id neque.
          </p>
          <NavLink to="/">QUR STORY</NavLink>
        </div>
        <div className="w-right">
          <img src={welcome} alt="" />
        </div>
      </div>
      <div className="discover">
        <div className="content">
          <span>Discover</span>
          <h1>Pato Place</h1>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <img src={card1} alt="" />
          <div className="content">
            <h4>Romantic Restaurant</h4>
            <p>
              Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
              eros.
            </p>
            <span>Learn More </span>
          </div>
        </div>
        <div className="card">
          <img src={card2} alt="" />
          <div className="content">
            <h4>Delicious Food</h4>
            <p>
              Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh
              urna
            </p>
            <span>Learn More </span>
          </div>
        </div>
        <div className="card">
          <img src={card3} alt="" />
          <div className="content">
            <h4>Red Wines You Love</h4>
            <p>
              Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
            </p>
            <span>Learn More </span>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="title">
          <span>Discover</span>
          <h2>OUR MENU</h2>
        </div>
        <div className="img-menu">
          <div className="img-1">
            <img src={menu1} alt="" />
            <button>lunch</button>
          </div>
          <div className="img-1">
            <img src={menu2} alt="" />
            <button>dinner</button>
          </div>
          <div className="img">
            <div className="img-1">
            <img src={menu3} alt="" />
            <button>drink</button>

            </div>
            <div className="img-1">
            <img src={menu4} alt="" />
            <button>starters</button>

            </div>
          </div>
        </div>
        <div className="b-img">
          <div className="img-left">
            <img src={menu5} alt="" />
            <button>happy hour</button>
          </div>
          <div className="img-right">
            <img src={menu6} alt="" />
            <button>dessert</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
