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
    <div className=" bg-black py-10">
      <Swiper modules = {[Autoplay]} spaceBetween={300} slidesPerView={3} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}>
          {relatorios.map((relatorio) => (
            <SwiperSlide key={relatorio.id}>
              <div className='flex flex-col w-min justify-center gap-5 border-2 border-gray-400 rounded-2xl bg-white p-5 font-bold hover:border-blue-400'>
                <Image src={ImgRelatorio} alt="img-slide"></Image>
                <h3 className='relative bottom-52 left-16 text-white'>Relatorio {relatorio.id}</h3>
                <Link href={`/usuario/relatorio/relatorio.id`} className='flex w-max gap-3 text-gray-400 bg-gray-600 p-3 rounded-lg'>
                  <Barras className='relative top-1'/>
                  <h6>Veja O Relatório</h6>
                </Link>
              </div>
            </SwiperSlide>
          ))}

      </Swiper>

    </div>    
  );
};
