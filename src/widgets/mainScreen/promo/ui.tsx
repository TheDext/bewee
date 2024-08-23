//@ts-nocheck
import { images } from './index';
import * as classes from './styles.module.scss';
import { FC } from 'react';

interface PromoProps {
    promoCls: string;
}

export const Promo: FC<PromoProps> = ({ promoCls }) => {
    return (
        <div className={promoCls}>
            {images.map((img, index) => {
                return (
                    <div key={index} className={classes.promo__img}>
                        <img src={img} alt="" />
                    </div>
                );
            })}
        </div>
    );
};
