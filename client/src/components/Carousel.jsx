import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carousel({ setBgColor }) {

    const banners = [carousel1, carousel2, {}];

    const colors = ['#22272E', '#4F6FD8', '#70a86c']

    const handleSlideChange = (swiper) => {
        setBgColor(colors[swiper.realIndex]);
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            allowTouchMove={false}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ height: '26rem', width: '100%' }}
            onSlideChange={handleSlideChange}
        >
            {banners.map((image, index) => (
                <SwiperSlide key={index} style={{ textAlign: 'center', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' }}>
                    <img src={image} alt="" style={{ objectFit: 'contain', display: 'block', width: '100%', height: '100%' }} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel;
