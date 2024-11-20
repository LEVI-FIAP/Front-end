import { Swiper, SwiperSlide } from 'swiper/react';
import { TipoProfessor} from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import 'swiper/css';


export default function Professores ({listaSlides} : {listaSlides:TipoProfessor[]}) {
    
  return (
    <div className='bg-gray-500 h-80'>
      <Swiper spaceBetween={400} slidesPerView={2} loop={true} pagination={true} navigation={true} className='swiperHome' autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}>
      {listaSlides.map((conteudo : TipoProfessor) => (
        <SwiperSlide className='slide' key={conteudo.nome}>
            <Image src={conteudo.img} alt='img-slide'/>
            <h3>{conteudo.nome}</h3>
            <p>{conteudo.materia}</p>
            <Link href={conteudo.github}><Github/></Link>
            <Link href={conteudo.linkedin}><Linkedin/></Link>
        </SwiperSlide>
        ))}
      </Swiper>

    </div>    
  );
};
