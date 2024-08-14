import { AppLink } from 'shared/ui/appLink/ui';
import * as classes from './styles.module.scss';

export const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <ul className={classes.navigation__list}>
                <li className={classes.navigation__item}>
                    <AppLink className={classes.navigation__link} to="#">
                        О нас
                    </AppLink>
                </li>

            </ul>
        </div>
    );
};
