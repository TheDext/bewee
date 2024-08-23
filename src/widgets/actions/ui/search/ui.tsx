//@ts-nocheck
import * as classes from './styles.module.scss';
import { TextField } from 'shared/ui/textField/ui';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from 'shared/ui/icon/assets/common/search.svg';
import { toggleShowCatalog } from 'entities/catalog/model/slice';
import useOutsideClick from 'app/providers/hook/useHandleClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMobileSearchBarVisible,
    setShowSearch,
} from 'entities/search/model/slice';

export const Search = () => {
    const [searchRequest, setSearchRequest] = useState({
        searchText: '',
    });

    const isShow = useSelector(getMobileSearchBarVisible());

    const dispatch = useDispatch();

    const handleClickOutside = () => {
        if (isShow) {
            dispatch(setShowSearch(false));
        }
    };
    const ref = useOutsideClick({ callback: handleClickOutside });

    const handleChange = ({ target }: HandleChangeProps) => {
        const { name, value } = target;
        setSearchRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className={classes.searchWrapper}>
            <div className={classes.searchWrapper__closeIcon}></div>
            <div className={classes.search}>
                <div className={classes.search__icon}>
                    <SearchIcon />
                </div>
                <div className={classes.search__input}>
                    <TextField
                        placeholder="Поиск..."
                        type="text"
                        value={searchRequest.searchText}
                        name="searchText"
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.search__submit}>Найти</div>
            </div>
        </div>
    );
};
