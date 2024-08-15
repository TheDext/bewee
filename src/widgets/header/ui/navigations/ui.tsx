import { AppLink } from 'shared/ui/appLink/ui';
import * as classes from './styles.module.scss';
import { navMenuConfig } from 'shared/config/navMenuConfig';

export const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <ul className={classes.navigation__list}>
                {Object.keys(navMenuConfig).map(
                    (key: keyof typeof navMenuConfig) => {
                        const { name, path } = navMenuConfig[key];

                        return (
                            <li key={path} className={classes.navigation__item}>
                                <AppLink
                                    className={classes.navigation__link}
                                    to={path}
                                >
                                    {name}
                                </AppLink>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};
