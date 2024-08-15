import { ReactComponent as TelIcon } from 'shared/ui/icon/assets/social/phone.svg';
import { ReactComponent as MailIcon } from 'shared/ui/icon/assets/social/mail.svg';
import * as classes from './styles.module.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getScreenSize } from 'entities/screenSize/model/slice';

interface FooterContactsProps {
    commonTitleCls?: string;
}

export const FooterContacts: FC<FooterContactsProps> = ({ commonTitleCls }) => {
    const { isMobile } = useSelector(getScreenSize());
    return (
        <>
            {!isMobile && <div className={commonTitleCls}>Контакты</div>}
            <div className={classes.footerContactsRow}>
                <div className={classes.footerContactsItem}>
                    <TelIcon className={classes.footerContactsItem__icon} />
                    <div className={classes.footerContactsItem__text}>
                        +38 097 435 6743
                    </div>
                </div>
                <div className={classes.footerContactsItem}>
                    <MailIcon className={classes.footerContactsItem__icon} />
                    <div className={classes.footerContactsItem__text}>
                        kidsshop@gmail.com
                    </div>
                </div>
            </div>
        </>
    );
};
