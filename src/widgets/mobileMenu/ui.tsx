import * as classes from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { Logo } from 'widgets/header/ui/logo';
import { Spoiler } from 'shared/ui/spoiler';

export const MobileMenu = () => {
    const { isMobile } = useSelector(getScreenSize());

    return (
        isMobile && (
            <div className={classes.mobileMenu}>
                <div className={classes.mobileMenu__logo}>
                    <Logo />
                </div>
                <Spoiler title="Все категории">Все категории</Spoiler>
                <Spoiler title="Акции">Акции</Spoiler>
                <Spoiler title="Информационный центр">
                    Информационный центр
                </Spoiler>
            </div>
        )
    );
};
