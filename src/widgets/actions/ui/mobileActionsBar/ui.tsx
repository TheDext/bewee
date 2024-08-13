import * as classes from './styles.module.scss';
import { ReactComponent as SearchIcon } from 'shared/ui/icon/assets/common/search.svg';
import { ReactComponent as BurgerIcon } from 'shared/ui/icon/assets/common/burgerIcon.svg';
import { User } from 'widgets/actions/ui/user';
import { WishListIcon } from 'widgets/actions/ui/wishList';
import { CartIcon } from 'widgets/actions/ui/cart';
import { useDispatch } from 'react-redux';
import { setShowSearch } from 'entities/search/model/slice';
import { toggle } from 'entities/mobileMenu/model/slice';

export const MobileActionsBar = () => {
    const dispatch = useDispatch();

    return (
        <div className={classes.actionsMobile}>
            <div className="_container">
                <div className={classes.actionsMobile__row}>
                    <BurgerIcon onClick={() => dispatch(toggle())} />
                    <SearchIcon
                        className={classes.searchIcon}
                        onClick={() => dispatch(setShowSearch(true))}
                    />
                    <User />
                    <WishListIcon />
                    <CartIcon />
                </div>
            </div>
        </div>
    );
};
