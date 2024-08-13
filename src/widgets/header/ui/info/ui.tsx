import { AppLink } from 'shared/ui/appLink/ui';
import * as classes from './styles.module.scss';

export const Info = () => {
    return (
        <div className={classes.info}>
            <ul className={classes.info__list}>
                <li className={classes.info__item}>
                    <AppLink className={classes.info__link} to="#">
                        О нас
                    </AppLink>
                </li>
                <li className={classes.info__item}>
                    <AppLink className={classes.info__link} to="#">
                        Оплата и доставка
                    </AppLink>
                </li>
                <li className={classes.info__item}>
                    <AppLink className={classes.info__link} to="#">
                        Отзывы
                    </AppLink>
                </li>
                <li className={classes.info__item}>
                    <AppLink className={classes.info__link} to="#">
                        FAQ
                    </AppLink>
                </li>
                <li className={classes.info__item}>
                    <AppLink className={classes.info__link} to="#">
                        О нас
                    </AppLink>
                </li>
            </ul>
        </div>
    );
};
