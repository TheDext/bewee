import { Logo } from 'widgets/header/ui/logo';
import { Info } from 'widgets/header/ui/info';
import { Socials } from 'shared/ui/socials';
import * as classes from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';

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
                        <Info />
                        <Socials />
                    </div>
                )}
            </div>
        </header>
    );
};
