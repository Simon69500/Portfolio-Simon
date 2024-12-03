import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import ProjetsModal from '../Modal/ProjetsModal';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../SCSS/Modal/swiper.scss";

const ImageSlider = () => (
    <div className="slide-container"> {/* Vous pouvez ajouter un container pour contrôler la mise en page */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="swiper"
      >
        {/* Boucle sur les projets */}
        {ProjetsModal.map((projet) =>
          projet.images.map((img, index) => (
            <SwiperSlide key={`${projet.id}-${index}`} className="swiper-slide-item">
              <img
                src={img}
                alt={`${projet.titre} - Image ${index + 1}`}
                className="slide-image"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
  
  export default ImageSlider;
