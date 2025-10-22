import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import me from "./assets/me.png"
import me2 from "./assets/me2.png"
import me3 from "./assets/me3.png"

function MeSlider() {
    
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
            <SwiperSlide className='gallery-item'>
                <img src={me} alt="" />
            </SwiperSlide>
            <SwiperSlide className='gallery-item'>
                <img src={me2} alt="" />
            </SwiperSlide>
            <SwiperSlide className='gallery-item'>
                <img src={me3} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default MeSlider
