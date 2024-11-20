import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaChartBarSolid as Barras } from "react-icons/lia";
import Image from 'next/image';
import Link from 'next/link';
import ImgRelatorio from "@/images/user/img-relatorio.png"
import 'swiper/css';


export default function Relatorios ({idRelatorio} : {idRelatorio:number}) {
    
  return (
    <div>
      <Swiper spaceBetween={400} slidesPerView={2} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 3000, 
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
