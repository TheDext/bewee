import { ReactComponent as TelIcon } from 'shared/ui/icon/assets/social/phone.svg';
import * as classes from './styles.module.scss';

export const FooterContacts = () => {
    return (
        <div className={classes.footerContacts}>
            <div className={classes.footerContacts__title}>Контакты</div>
            <div className={classes.footerContacts__row}>
                <div className={classes.footerContacts__item}>
                    +38 097 435 6743
                </div>
            </div>
        </div>
    );
};
