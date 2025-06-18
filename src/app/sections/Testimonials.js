'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import MainHeading from "../Components/MainHeading";
import TestimonialsCard from "../Components/TestimonialsCard";

export function Testimonials() {
  return (
    <div className='bg-[#1E1E1E] pt-16 pb-16'>
      <div className="container px-6 text-center" data-aos="fade-down">
        <MainHeading text="Depoimentos" />
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              className='h-full md:h-fit'
            >

              <SwiperSlide>
                <TestimonialsCard user={'Paulo Bento'} role={'Desenvolvedor'} team_role={"Colega de faculdade"} testimonial={`Trabalhei com o Marcos no projeto final da faculdade e fiquei impressionado com sua dedicação, criatividade e habilidades excepcionais em desenvolvimento front-end.

                Marcos é extremamente comprometido e sempre busca ir além do esperado. Sua habilidade em front-end é notável e sua capacidade de transformar conceitos em interfaces atrativas e funcionais é impressionante. Além disso, a determinação e a persistência de Marcos são contagiantes. Ele nunca se contenta com o básico e está sempre disposto a ir além para entregar resultados de qualidade. Sua atitude pró-ativa e sua disposição para enfrentar desafios são verdadeiramente inspiradoras.

                Durante nosso trabalho juntos, pude perceber que Marcos é um excelente colaborador de equipe. Sua capacidade de comunicação clara e eficaz, combinada com seu profissionalismo, torna o ambiente de trabalho muito mais agradável e produtivo.

                Recomendo Marcos sem hesitação e acredito que ele será um profissional valioso para qualquer equipe ou empresa. Parabéns pelo seu trabalho incrível, Marcos, e desejo muito sucesso em sua carreira futura!`} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user='Paulo Silva' role={'Designer Gráfico'} team_role={'Colega de equipe'} testimonial={`Durante o tempo que trabalhei em conjunto com o Marcos na Empresa Fox Digital, tive o prazer de conhecer o profissional excelente e aplicado que ele é.

                Marcos é um profissional atento aos detalhes e que busca passar as informações da forma mais clara possível. Seus projetos desenvolvidos durante o tempo que passou na empresa sempre foram otimizados e atendiam as deadlines propostas por nossos superiores.

                Concluindo, Marcos tem um perfil excelente que se encaixaria bem em qualquer empresa que busca um funcionário dedicado e interessado em desenvolver suas soft skills e hard skills.`} />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* 
          */}

        </div>
      </div>
    </div>
  )
}
