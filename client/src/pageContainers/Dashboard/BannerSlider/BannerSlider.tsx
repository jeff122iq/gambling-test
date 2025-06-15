'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { PROMOTIONS_DATA_ARRAY } from '@/mocks/promotions';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Banner } from '@/components/Banner/Banner';
import css from './BannerSlider.module.css';

export const BannerSlider = () => {
  return (
    <div className={css.bannerSliderWrapper}>
      <Swiper modules={[Navigation]} navigation={true} spaceBetween={30} slidesPerView={3}>
        {PROMOTIONS_DATA_ARRAY.map(item => (
          <SwiperSlide key={item.id}>
            <Banner
              img={item.img}
              title={item.title}
              status={item.status}
              description={item.description}
              buttonText={item.buttonText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
