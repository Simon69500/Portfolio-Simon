import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import '@scss/index.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ImageSlider = ({ images, isMobile }) => {
  if (!images || images.length === 0) {
    return <p>Aucune image disponible pour ce projet.</p>; // Message si aucune image n'est fournie
  }

  return (
    <div className="slide-container">
      {/* Conteneur pour la mise en page */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="swiper"
      >
        {/* Parcourt uniquement les images fournies */}
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide-item">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${isMobile ? "mobile-image" : "desktop-image"}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
