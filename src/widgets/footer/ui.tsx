import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { DesktopFooter } from 'widgets/footer/desktopFooter';
import { MobileFooter } from 'widgets/footer/mobileFooter';

export const Footer = () => {
    const { isMobile } = useSelector(getScreenSize());
    return <footer>{!isMobile ? <DesktopFooter /> : <MobileFooter />}</footer>;
};
