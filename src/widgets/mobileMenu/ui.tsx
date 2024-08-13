import * as classes from './styles.module.scss';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { Logo } from 'widgets/header/ui/logo';
import { Spoiler } from 'shared/ui/spoiler';
import { CSSTransition } from 'react-transition-group';
import { getMobileMenuVisible } from 'entities/mobileMenu/model/slice';

export const MobileMenu = () => {
    const { isMobile } = useSelector(getScreenSize());
    const showMobileMenu = useSelector(getMobileMenuVisible());

    return (
        isMobile && (
            <CSSTransition
                in={showMobileMenu}
                timeout={400}
                classNames={{
                    enter: classes.mobileMenu__contentEnter,
                    enterActive: classes.mobileMenu__contentEnterActive,
                    exit: classes.mobileMenu__contentExit,
                    exitActive: classes.mobileMenu__contentExitActive,
                }}
                unmountOnExit
            >
                <div className={classes.mobileMenu}>
                    <div className={classes.mobileMenu__logo}>
                        <Logo />
                    </div>
                    <div className={classes.mobileMenu__body}>
                        <div className={classes.mobileMenu__item}>Каталог</div>
                        <div className={classes.mobileMenu__item}>
                            <Spoiler title="Акции">Акции</Spoiler>
                        </div>
                        <div className={classes.mobileMenu__item}>
                            <Spoiler title="Акции">Акции</Spoiler>
                        </div>
                        <div className={classes.mobileMenu__item}>
                            <Spoiler title="Акции">Акции</Spoiler>
                        </div>
                        <div className={classes.mobileMenu__item}>
                            <Spoiler title="Акции">Акции</Spoiler>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    );
};
