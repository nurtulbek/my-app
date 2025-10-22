import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import me from "./assets/me.png"
import me2 from "./assets/me2.png"
import me3 from "./assets/me3.png"


// To add more photos without touching the code,
// place image files in `public/gallery/` and
// list their paths in the `extraImages` array below.

function MeSlider() {
    // Images placed under `public/` can be referenced by absolute paths
    const extraImages = [
        "/gallery/photo-1.png", // first provided image
        "/gallery/photo-2.jpg", // second provided image
    ];

    const slides = [me, me2, me3, ...extraImages];

    return(
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
        >
            {slides.map((src, idx) => (
                <SwiperSlide className='gallery-item' key={idx}>
                    <img src={src} alt={`slide-${idx + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MeSlider
