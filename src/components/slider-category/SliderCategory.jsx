// import Swiper core and required modules
import { Pagination } from "swiper";
import React, { useState, useReducer, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sliderCategory.css";

const SliderCategory = () => {

  const [title, setTitle] = useState("");
  const [bulletClass, setBulletClass] = useState("")


  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const [slideItems] = useState([
    {
      title: "Sprite",
      icon: "./img/category-slider/category-slider-2.svg",
      id: 1,
    },
    {
      title: "Coca Cola",
      icon: "./img/category-slider/category-slider-1.svg",
      id: 2,
    },
    {
      title: "Sprite",
      icon: "./img/category-slider/category-slider-2.svg",
      id: 3,
    },
    {
      title: "Coca Cola",
      icon: "./img/category-slider/category-slider-1.svg",
      id: 4,
    },
    {
      title: "Sprite",
      icon: "./img/category-slider/category-slider-2.svg",
      id: 5,
    },
    {
      title: "Coca Cola",
      icon: "./img/category-slider/category-slider-1.svg",
      id: 6,
    },
  ]);
  const [filterButtons] = useState([
    {
      title: "Fırsat Bul",
      icon: "./img/category-slider/search-icon.svg",
      id: 1,
    },
    {
      title: "Coca Cola",
      icon: "./img/category-slider/coca-cola-icon.svg",
      id: 2,
    },
    { title: "Sprite", icon: "./img/category-slider/sprite-icon.svg", id: 3 },
    {
      title: "Trendyol",
      icon: "./img/category-slider/trendyol-icon.svg",
      id: 4,
    },
  ]);
  const [slideItemsCopy, setSlideItemsCopy] = useState(slideItems);

  const filterSliders = (buttonTitle) => {
    setTitle(buttonTitle)
    forceUpdate();
    let deepCopy = JSON.parse(JSON.stringify(slideItems));
    let filteredItems = deepCopy.filter((item) => item.title === buttonTitle);
    setSlideItemsCopy(filteredItems);
  };

  useEffect(() => { 
    if (title === 'Sprite') {
      setBulletClass('active-sprite')
    } else if (title === 'Coca Cola' && title.length !== 0) {
      setBulletClass('active-cola')
    }
  },[title])

  console.log(bulletClass)

  return (
    <>
      <div className="category-slider">
        <div className="container">
          <div className="slider-category-tabs">
            <ul>
              {filterButtons.map((item) => (
                <li
                  className="slider-item"
                  onClick={() => filterSliders(item.title)}
                >
                  <img className="tab-icons" src={item.icon} alt={item.title} key={item.id} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            modules={[Pagination]}
            pagination={{ 
              clickable: true,
              bulletClass:  `swiper-pagination-bullet ${bulletClass}`
            }}
            breakpoints={{
              1300: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              850: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              150: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            {slideItemsCopy.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  href={`/${item.title
                    .toLowerCase()
                    .replace(/[^A-Z0-9]/gi, "-")}`}
                >
                  <img src={item.icon} alt="Slider image" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderCategory;
