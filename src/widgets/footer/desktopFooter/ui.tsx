import * as classes from './styles.module.scss';
import { FooterContacts } from 'widgets/footer/footerContacts';
import { FooterMenu } from 'widgets/footer/footerMenu';
import { FooterSocials } from 'widgets/footer/footerSocials';

export const DesktopFooter = () => {
    return (
        <div className="_container">
            <div className={classes.footerRow}>
                <div className={classes.footerColumn}>
                    <FooterContacts commonTitleCls={classes.footerTitle} />
                </div>
                <div className={classes.footerColumn}>
                    <FooterMenu commonTitleCls={classes.footerTitle} />
                </div>
                <div className={classes.footerColumn}>
                    <FooterSocials commonTitleCls={classes.footerTitle} />
                </div>
            </div>
        </div>
    );
};
