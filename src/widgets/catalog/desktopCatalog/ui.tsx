//@ts-nocheck

import { useDispatch, useSelector } from 'react-redux';
import {
    getCatalogById,
    getCurrentCatalog,
    getNavCategories,
    setMainCatalog,
    setSubCatalog,
    toggleShowCatalog,
} from 'entities/catalog/model/slice';
import * as classes from './styles.module.scss';
import { CatalogList } from 'widgets/catalog/catalogList';
import classNames from 'shared/lib/classNames/classNames';
import useOutsideClick from 'app/providers/hook/useHandleClickOutside';

export const DesktopCatalog = () => {
    const categories = useSelector(getNavCategories());
    const { mainCatalogId, subcatalogId } = useSelector(getCurrentCatalog());
    const dispatch = useDispatch();

    const mainCatalog = useSelector(getCatalogById(mainCatalogId));
    const subcatalog = useSelector(getCatalogById(subcatalogId, true));

    const handleClickOutside = () => {
        dispatch(toggleShowCatalog(false));
    };
    const ref = useOutsideClick({ callback: handleClickOutside });
    return (
        <nav ref={ref} className={classes.catalog}>
            <div
                className={classNames(classes.catalog__rowWrapper, {}, [
                    '_container',
                ])}
            >
                <div className={classes.catalog__row}>
                    <CatalogList
                        list={categories}
                        handleClick={(id) => dispatch(setMainCatalog(id))}
                        className={classes.catalog__category}
                    />
                    {mainCatalog && (
                        <CatalogList
                            list={mainCatalog}
                            className={classes.catalog__subcatalog}
                            handleClick={(id) => dispatch(setSubCatalog(id))}
                        />
                    )}
                    {subcatalog && (
                        <CatalogList list={subcatalog} className="Ad" />
                    )}
                </div>
            </div>
        </nav>
    );
};
