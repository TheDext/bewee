import { FC, ReactNode } from 'react';
import { Actions } from 'widgets/actions';
import { useSelector } from 'react-redux';
import { getMobileSearchBarVisible } from 'entities/search/model/slice';
import { Search } from 'widgets/actions/ui/search';
import * as classes from './styles.module.scss';
import { getCatalogVisible } from 'entities/catalog/model/slice';
import { Header } from 'widgets/header';
import { Catalog } from 'widgets/catalog';
import { MobileMenu } from 'widgets/mobileMenu/ui';
import { Footer } from 'widgets/footer';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const showMobileSearchBar = useSelector(getMobileSearchBarVisible());
    const showCatalog = useSelector(getCatalogVisible());

    return (
        <div className="app">
            <Header />
            <Actions />
            {showMobileSearchBar && <Search />}
            {showCatalog && <Catalog />}
            <MobileMenu />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
