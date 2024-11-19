import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CarrosselProps, TipoSlidesHome } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Carrossel ({listaSlides} : CarrosselProps) {
    
  return (
    <Swiper spaceBetween={400} slidesPerView={2} loop={true} pagination={true} >
      {listaSlides.map((conteudo : TipoSlidesHome) => (
        <SwiperSlide className='slide' key={conteudo.subtitulo}>
          <Image src={conteudo.img} alt='img-slide'/>
          <h3>{conteudo.subtitulo}</h3>
          <p>{conteudo.texto}</p>
          <Link href={conteudo.link}>
            <conteudo.Icon />
            <h6>Clique aqui</h6>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
