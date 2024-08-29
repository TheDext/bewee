//@ts-nocheck

import { useDispatch, useSelector } from 'react-redux';
import {
    getCatalogById,
    getCurrentCatalog,
    getNavCategories,
    setCategory,
    setSubcategory,
    toggleShowCatalog,
} from 'entities/catalog/model/slice';
import * as classes from './styles.module.scss';
import { CatalogList } from 'widgets/catalog/catalogList';
import classNames from 'shared/lib/classNames/classNames';
import useOutsideClick from 'app/providers/hook/useHandleClickOutside';

export const DesktopCatalog = () => {
    const categories = useSelector(getNavCategories());
    const { categoryId, subcategoryId } = useSelector(getCurrentCatalog());
    const dispatch = useDispatch();

    const category = useSelector(getCatalogById(categoryId));
    const subcategory = useSelector(getCatalogById(subcategoryId, true));

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
                        handleClick={(id) => dispatch(setCategory(id))}
                        className={classes.catalog__category}
                    />
                    {category && (
                        <CatalogList
                            list={category}
                            className={classes.catalog__subcatalog}
                            handleClick={(id) => dispatch(setSubcategory(id))}
                        />
                    )}
                    {subcategory && (
                        <CatalogList list={subcategory} className="Ad" />
                    )}
                </div>
            </div>
        </nav>
    );
};
