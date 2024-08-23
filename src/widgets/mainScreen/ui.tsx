import { FC } from 'react';
import { MainSlider } from 'widgets/mainScreen/mainSlider';
import { Promo } from 'widgets/mainScreen/promo';
import * as classes from './styles.module.scss';

export const MainScreen: FC = () => {
    return (
        <div className={classes.mainScreen}>
            <div className="_container">
                <div className={classes.mainScreen__row}>
                    <MainSlider mainSliderCls={classes.mainScreen__slider} />
                    <Promo promoCls={classes.mainScreen__promo} />
                </div>
            </div>
        </div>
    );
};
