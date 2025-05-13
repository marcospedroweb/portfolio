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
      <div className="container text-center px-6">
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
                <TestimonialsCard user={'Fulano Ciclano'} role={'Desenvolvedor'} team_role={"Parceiro de equipe"} testimonial={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis molestiae ab accusamus itaque eveniet cum in repudiandae autem, sed deserunt harum quam voluptatum soluta delectus? Nostrum quidem inventore reprehenderit explicabo ex debitis consectetur, consequuntur placeat nam, sunt numquam possimus amet, deleniti veniam autem vero? Corporis neque doloribus repudiandae est.'} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user='Beltrano Fulano' role={'Tech leader'} team_role={'Lider de equipe'} testimonial={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum, quidem quo veritatis nam rem dolor omnis incidunt laboriosam itaque optio temporibus, quaerat, molestiae esse. Recusandae, quo voluptatem? Earum fuga ullam voluptates culpa optio aliquid totam necessitatibus voluptatibus, iure magnam praesentium repudiandae asperiores tempora, aut veritatis neque quibusdam, pariatur cum. Totam eos iusto cupiditate ea sunt at nemo deserunt aut nam ipsa officiis natus aliquid, autem, rerum temporibus eius laudantium. Accusantium omnis aperiam vero, excepturi explicabo id ducimus, tenetur, fuga consequatur harum consectetur quis est sint commodi aut ullam eaque! Sequi veniam dolore, impedit eveniet ducimus sunt suscipit natus non?'} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user={'Fulano Ciclano'} role={'Desenvolvedor'} team_role={"Parceiro de equipe"} testimonial={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis molestiae ab accusamus itaque eveniet cum in repudiandae autem, sed deserunt harum quam voluptatum soluta delectus? Nostrum quidem inventore reprehenderit explicabo ex debitis consectetur, consequuntur placeat nam, sunt numquam possimus amet, deleniti veniam autem vero? Corporis neque doloribus repudiandae est.'} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user='Beltrano Fulano' role={'Tech leader'} team_role={'Lider de equipe'} testimonial={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum, quidem quo veritatis nam rem dolor omnis incidunt laboriosam itaque optio temporibus, quaerat, molestiae esse. Recusandae, quo voluptatem? Earum fuga ullam voluptates culpa optio aliquid totam necessitatibus voluptatibus, iure magnam praesentium repudiandae asperiores tempora, aut veritatis neque quibusdam, pariatur cum. Totam eos iusto cupiditate ea sunt at nemo deserunt aut nam ipsa officiis natus aliquid, autem, rerum temporibus eius laudantium. Accusantium omnis aperiam vero, excepturi explicabo id ducimus, tenetur, fuga consequatur harum consectetur quis est sint commodi aut ullam eaque! Sequi veniam dolore, impedit eveniet ducimus sunt suscipit natus non?'} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user={'Fulano Ciclano'} role={'Desenvolvedor'} team_role={"Parceiro de equipe"} testimonial={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus corporis molestiae ab accusamus itaque eveniet cum in repudiandae autem, sed deserunt harum quam voluptatum soluta delectus? Nostrum quidem inventore reprehenderit explicabo ex debitis consectetur, consequuntur placeat nam, sunt numquam possimus amet, deleniti veniam autem vero? Corporis neque doloribus repudiandae est.'} />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard user='Beltrano Fulano' role={'Tech leader'} team_role={'Lider de equipe'} testimonial={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore earum, quidem quo veritatis nam rem dolor omnis incidunt laboriosam itaque optio temporibus, quaerat, molestiae esse. Recusandae, quo voluptatem? Earum fuga ullam voluptates culpa optio aliquid totam necessitatibus voluptatibus, iure magnam praesentium repudiandae asperiores tempora, aut veritatis neque quibusdam, pariatur cum. Totam eos iusto cupiditate ea sunt at nemo deserunt aut nam ipsa officiis natus aliquid, autem, rerum temporibus eius laudantium. Accusantium omnis aperiam vero, excepturi explicabo id ducimus, tenetur, fuga consequatur harum consectetur quis est sint commodi aut ullam eaque! Sequi veniam dolore, impedit eveniet ducimus sunt suscipit natus non?'} />
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
