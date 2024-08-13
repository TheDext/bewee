import { DesktopActionsBar } from 'widgets/actions/ui/desktopActionsBar';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { MobileActionsBar } from 'widgets/actions/ui/mobileActionsBar/ui';

export const Actions = () => {
    const { isMobile } = useSelector(getScreenSize());
    return isMobile ? <MobileActionsBar /> : <DesktopActionsBar />;
};
