import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carrossel () {
    
  return (
    <Swiper spaceBetween={50} slidesPerView={3} loop={true}>
      <SwiperSlide className='slide' >Slide 1</SwiperSlide>
      <SwiperSlide className='slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='slide'>Slide 4</SwiperSlide>
      <SwiperSlide className='slide'>Slide 5</SwiperSlide>
      <SwiperSlide className='slide'>Slide 6</SwiperSlide>
      <SwiperSlide className='slide'>Slide 7</SwiperSlide>
      <SwiperSlide className='slide'>Slide 8</SwiperSlide>
    </Swiper>
  );
};
