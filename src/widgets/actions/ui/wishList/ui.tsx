import { ReactComponent as wishList } from 'shared/ui/icon/assets/common/wishList.svg';
import { withCounter } from 'app/providers/hoc/withCounter/withCounter';

export const WishListIcon = () => {
    const WishListWithIconWithCounter = withCounter(wishList);

    return (
        <div>
            <WishListWithIconWithCounter counter={1} />
        </div>
    );
};
