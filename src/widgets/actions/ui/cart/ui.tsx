import { withCounter } from 'app/providers/hoc/withCounter/withCounter';
import { ReactComponent as Cart } from 'shared/ui/icon/assets/common/cart.svg';

export const CartIcon = () => {
    const CartIconWithCounter = withCounter(Cart);

    return (
        <div>
            <CartIconWithCounter counter={1} />
        </div>
    );
};
