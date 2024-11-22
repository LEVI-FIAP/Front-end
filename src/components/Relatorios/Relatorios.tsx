import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { LiaChartBarSolid as Barras } from "react-icons/lia";
import { Autoplay } from 'swiper/modules'
import Image from 'next/image';
import Link from 'next/link';
import ImgRelatorio from "@/images/user/img-relatorio.png";
import { TipoRelatorio } from '@/types';


export default function Relatorios ({relatorios} : {relatorios:TipoRelatorio[]}) {
    
  return (
    <div className='bg-black'>
      <Swiper modules = {[Autoplay]} spaceBetween={300} slidesPerView={2} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}>
          {relatorios.map((relatorio) => (
            <SwiperSlide key={relatorio.id}>
              <Image src={ImgRelatorio} alt="img-slide"></Image>
              <h3>Relatorio {relatorio.id}</h3>
              <Link href={`/usuario/relatorio/relatorio.id`}>
                <h6>Veja O Relatório</h6>
                <Barras/>
              </Link>
            </SwiperSlide>
          ))}

      </Swiper>

    </div>    
  );
};
