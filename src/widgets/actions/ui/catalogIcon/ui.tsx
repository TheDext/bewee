//@ts-nocheck
import * as classes from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCatalogVisible,
    toggleShowCatalog,
} from 'entities/catalog/model/slice';
import classNames from 'shared/lib/classNames/classNames';
import {
    setExcludeElement,
    removeExcludeElement,
} from 'entities/excludeElement/model/slice';

export const CatalogIcon = () => {
    const isShow = useSelector(getCatalogVisible());
    const dispatch = useDispatch();

    const handleClick = ({ currentTarget }) => {
        dispatch(toggleShowCatalog(!isShow));
        dispatch(setExcludeElement(currentTarget.id));
    };

    return (
        <button
            className={classNames(
                classes.catalogIcon,
                { [classes._active]: isShow },
                []
            )}
            onClick={(e) => handleClick(e)}
            id="catalogToggleButton"
        >
            <div className={classes.catalogIcon__icon}>
                <span></span>
            </div>
            <div className={classes.catalogIcon__text}>Каталог</div>
        </button>
    );
};
