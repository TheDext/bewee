import * as classes from './styles.module.scss';
import { navMenuConfig } from 'shared/config/navMenuConfig';
import { AppLink } from 'shared/ui/appLink/ui';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';

interface FooterMenuProps {
    commonTitleCls?: string;
}

export const FooterMenu: FC<FooterMenuProps> = ({ commonTitleCls }) => {
    const { isMobile } = useSelector(getScreenSize());
    return (
        <>
            {!isMobile && <div className={commonTitleCls}>Меню сайта</div>}
            <ul className={classes.footerMenuRow}>
                {Object.keys(navMenuConfig).map((key) => {
                    const { name, path } = navMenuConfig[key];

                    return (
                        <AppLink
                            key={path}
                            className={classes.footerMenuItem}
                            to={path}
                        >
                            {name}
                        </AppLink>
                    );
                })}
            </ul>
        </>
    );
};
