import { Search } from 'widgets/actions/ui/search';
import { User } from 'widgets/actions/ui/user';
import { WishListIcon } from 'widgets/actions/ui/wishList';
import { CartIcon } from 'widgets/actions/ui/cart';
import { CatalogIcon } from 'widgets/actions/ui/catalogIcon';
import * as classes from './styles.module.scss';

export const DesktopActionsBar = () => {
    return (
        <div className={classes.actionsDesktop}>
            <div className="_container">
                <div className={classes.actionsDesktop__row}>
                    <CatalogIcon />
                    <Search />
                    <User />
                    <WishListIcon />
                    <CartIcon />
                </div>
            </div>
        </div>
    );
};
