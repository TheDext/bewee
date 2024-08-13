//@ts-nocheck
import * as classes from './styles.module.scss';
import { TextField } from 'shared/ui/textField/ui';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from 'shared/ui/icon/assets/common/search.svg';

export const Search = () => {
    const [searchRequest, setSearchRequest] = useState({
        searchText: '',
    });

    const handleChange = ({ target }: HandleChangeProps) => {
        const { name, value } = target;
        setSearchRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
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
    );
};
