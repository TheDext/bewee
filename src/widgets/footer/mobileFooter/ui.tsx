import { Spoiler } from 'shared/ui/spoiler';
import { FooterContacts } from 'widgets/footer/footerContacts';
import * as classes from './styles.module.scss';
import { FooterMenu } from 'widgets/footer/footerMenu';
import { FooterSocials } from 'widgets/footer/footerSocials';

export const MobileFooter = () => {
    return (
        <div className="_container">
            <Spoiler
                title={'Контакты'}
                classTitle={classes.mobileFooterTitle}
                classEnter={classes.mobileFooterContactsSpoilerEnter}
                classEnterActive={
                    classes.mobileFooterContactsSpoilerEnterActive
                }
                classExit={classes.mobileFooterContactsSpoilerExit}
                classExitActive={classes.mobileFooterContactsSpoilerExitActive}
            >
                <FooterContacts />
            </Spoiler>
            <Spoiler
                title={'Меню сайта'}
                classTitle={classes.mobileFooterTitle}
                classEnter={classes.mobileFooterMenuSpoilerEnter}
                classEnterActive={classes.mobileFooterMenuSpoilerEnterActive}
                classExit={classes.mobileFooterMenuSpoilerExit}
                classExitActive={classes.mobileFooterMenuSpoilerExitActive}
            >
                <FooterMenu />
            </Spoiler>
            <Spoiler
                title={'Социальные сети'}
                classTitle={classes.mobileFooterTitle}
                classEnter={classes.mobileFooterSocialsSpoilerEnter}
                classEnterActive={classes.mobileFooterSocialsSpoilerEnterActive}
                classExit={classes.mobileFooterSocialsSpoilerExit}
                classExitActive={classes.mobileFooterSocialsSpoilerExitActive}
            >
                <FooterSocials />
            </Spoiler>
        </div>
    );
};
