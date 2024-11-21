import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { LiaChartBarSolid as Barras } from "react-icons/lia";
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';
import Link from 'next/link';
import ImgRelatorio from "@/images/user/img-relatorio.png"


export default function Relatorios ({idRelatorio} : {idRelatorio:number}) {
    
  return (
    <div className='bg-black'>
      <Swiper modules = {[Autoplay]} spaceBetween={300} slidesPerView={2} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}>
        <SwiperSlide className='slide'>
          <div className='flex flex-col justify-center gap-5 border-2 border-gray-400 w-max rounded-2xl bg-white p-7 font-bold hover:border-blue-400'>
            <Image src={ImgRelatorio} alt='img-slide'/>
            <h3 className='text-center'>Relatorio {idRelatorio}</h3>
            <Link href={`/usuario/relatorio/${idRelatorio}`} className='flex gap-5 items-center text-gray-400 bg-gray-800 pl-5 py-1 text-xl'>
                <h6>Veja o Relatório</h6>
                <Barras /> 
            </Link>
          </div>
            
        </SwiperSlide>
      </Swiper>

    </div>    
  );
};
