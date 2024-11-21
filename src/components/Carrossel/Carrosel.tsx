import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { TipoCarrosel} from '@/types';
import Image from 'next/image';
import Link from 'next/link';


export default function Carrossel ({listaSlides} : {listaSlides:TipoCarrosel[]}) {
    
  return (
    <div className='bg-gray-500 h-80'>
      <Swiper modules = {[Autoplay]} spaceBetween={250} slidesPerView={3} loop={true} pagination={true} navigation={true} className='swiperHome py-10 relative top-20 h-auto' autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}>
      {listaSlides.map((conteudo : TipoCarrosel) => (
        <SwiperSlide className='slide' key={conteudo.subtitulo}>
          <div className='flex flex-col justify-center gap-5 border-2 border-gray-400 rounded-2xl bg-white p-7 font-bold hover:border-blue-400'>
            <Image src={conteudo.img} alt='img-slide'/>
            <h3 className='text-center'>{conteudo.subtitulo}</h3>
            <p>{conteudo.texto}</p>
            <Link href={conteudo.link} className='flex gap-5 items-center text-gray-400 bg-gray-800 pl-5 py-1 text-xl'>
              <conteudo.Icon />
              <h6>Clique aqui</h6>
            </Link>
          </div>  
        </SwiperSlide>
        ))}
      </Swiper>

    </div>    
  );
};
