import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import * as classes from './styles.module.scss';
import img from 'shared/ui/img/mainScreen/mainSlider/01.png';

interface MainSliderProps {
    mainSliderCls: string;
}

export const MainSlider: FC<MainSliderProps> = ({ mainSliderCls }) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            className={mainSliderCls}
        >
            <SwiperSlide className={classes.mainSlider__slide}>
                <img src={img} alt="" />
            </SwiperSlide>
            <SwiperSlide className={classes.mainSlider__slide}>
                <img src={img} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};
