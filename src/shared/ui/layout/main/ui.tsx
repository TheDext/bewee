import { FC, ReactNode } from 'react';
import { Actions } from 'widgets/actions';
import { useSelector } from 'react-redux';
import { getShowMobileSearchBar } from 'entities/search/model/slice';
import { Search } from 'widgets/actions/ui/search';
import classNames from 'shared/lib/classNames/classNames';
import * as classes from './styles.module.scss';
import { getCatalogVisible } from 'entities/catalog/model/slice';
import { Header } from 'widgets/header';
import { Catalog } from 'widgets/catalog';
import { getMobileMenuVisible } from 'entities/mobileMenu/model/slice';
import { MobileMenu } from 'widgets/mobileMenu/ui';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const showMobileSearchBar = useSelector(getShowMobileSearchBar());
    const showCatalog = useSelector(getCatalogVisible());
    const showMobileMenu = useSelector(getMobileMenuVisible());

    return (
        <div className="app">
            <Header />
            <Actions />
            {showMobileSearchBar && <Search />}
            {showCatalog && <Catalog />}
            {showMobileMenu && <MobileMenu />}
            <main
                className={classNames(
                    '',
                    { [classes._lock]: showMobileSearchBar },
                    []
                )}
            >
                {children}
            </main>
        </div>
    );
};
