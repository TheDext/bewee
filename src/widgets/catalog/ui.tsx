import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';
import { DesktopCatalog } from 'widgets/catalog/desktopCatalog/ui';

export const Catalog = () => {
    const { isMobile } = useSelector(getScreenSize());

    return isMobile ? 'MobileCatalog' : <DesktopCatalog />;
};
