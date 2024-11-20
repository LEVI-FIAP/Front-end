import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaChartBarSolid as Barras } from "react-icons/lia";
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';
import Link from 'next/link';
import ImgRelatorio from "@/images/user/img-relatorio.png"
import 'swiper/css';


export default function Relatorios ({idRelatorio} : {idRelatorio:number}) {
    
  return (
    <div>
      <Swiper modules = {[Autoplay]} spaceBetween={400} slidesPerView={3} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}>
        <SwiperSlide className='slide'>
            <Image src={ImgRelatorio} alt='img-slide'/>
            <h3>Relatorio {idRelatorio}</h3>
            <Link href={`/usuario/${idRelatorio}`}>
                <h6>Veja o Relatório</h6>
                <Barras />
            </Link>
        </SwiperSlide>
      </Swiper>

    </div>    
  );
};
