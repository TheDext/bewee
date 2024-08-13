import { useDispatch } from 'react-redux';
import { FC, ReactNode, useEffect } from 'react';

import useMatchMedia from 'app/providers/hook/useMatchMedia';
import { setup } from 'entities/screenSize/model/slice';
import { setShowSearch } from 'entities/search/model/slice';

interface AppLoaderProps {
    children: ReactNode;
}

const AppLoader: FC<AppLoaderProps> = ({ children }) => {
    const dispatch = useDispatch();
    const screenSizeValues = useMatchMedia() as {
        isMobile: boolean;
        isTablet: boolean;
        isDesktop: boolean;
    };

    const { isMobile } = screenSizeValues;

    useEffect(() => {
        dispatch(setup(screenSizeValues));
        if (!isMobile) {
            dispatch(setShowSearch(false));
        }
    }, [screenSizeValues]);

    return children;
};

export default AppLoader;
