//@ts-nocheck

import { useDispatch, useSelector } from 'react-redux';
import {
    getCatalogById,
    getCatalogVisible,
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
import { getExcludeElement } from 'entities/excludeElement/model/slice';

export const DesktopCatalog = () => {
    const categories = useSelector(getNavCategories());
    const isShow = useSelector(getCatalogVisible());
    const { mainCatalogId, subcatalogId } = useSelector(getCurrentCatalog());
    const excludeElement = useSelector(getExcludeElement());
    const dispatch = useDispatch();

    const mainCatalog = useSelector(getCatalogById(mainCatalogId));
    const subcatalog = useSelector(getCatalogById(subcatalogId, true));

    console.log('mainCatalog', mainCatalog);
    console.log('subcatalog', subcatalog);

    const handleClickOutside = () => {
        console.log('!!!', excludeElement);
        if (!excludeElement && isShow) {
            console.log('Клик вне компонента desktopCatalog');
            dispatch(toggleShowCatalog(false));
        }
    };
    const ref = useOutsideClick({ callback: handleClickOutside });
    console.log(ref);
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
