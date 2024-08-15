import { Logo } from 'widgets/header/ui/logo';
import { Navigation } from 'widgets/header/ui/navigations';
import { Socials } from 'shared/ui/socials';
import * as classes from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { HeaderSocials } from 'widgets/header/ui/headerSocials';

export const Header = () => {
    const { isMobile } = useSelector(getScreenSize());
    return (
        <header>
            <div className="_container">
                {isMobile ? (
                    <Logo />
                ) : (
                    <div className={classes.header__row}>
                        <Logo />
                        <Navigation />
                        <HeaderSocials />
                    </div>
                )}
            </div>
        </header>
    );
};
