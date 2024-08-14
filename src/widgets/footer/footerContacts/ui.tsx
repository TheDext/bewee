import { ReactComponent as TelIcon } from 'shared/ui/icon/assets/social/phone.svg';
import {ReactComponent as MailIcon} from "shared/ui/icon/assets/social/mail.svg";
import * as classes from './styles.module.scss';

export const FooterContacts = () => {
    return (
        <>
            <div className={classes.footerContactsTitle}>Контакты</div>
            <div className={classes.footerContactsRow}>
                <div className={classes.footerContactsItem}>
                    <TelIcon className={classes.footerContactsItem__icon}/>
                    <div className={classes.footerContactsItem__text}>+38 097 435 6743</div>
                </div>
                <div className={classes.footerContactsItem}>
                  <MailIcon className={classes.footerContactsItem__icon}/>
                    <div className={classes.footerContactsItem__text}>+38 097 435 6743</div>
                </div>
            </div>
        </>
    );
};
