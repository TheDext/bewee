import * as classes from './styles.module.scss';

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.logo__top}>BE</div>
            <div className={classes.logo__bottom}>WEE</div>
        </div>
    );
};
