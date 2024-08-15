import { AppLink } from 'shared/ui/appLink/ui';
import * as classes from './styles.module.scss';
import { Socials } from 'shared/ui/socials';

export const HeaderSocials = () => (
    <div>
        <AppLink className={classes.headerSocialsTel} to="tel:+70000000000">
            +7 (952) 869 94 19
        </AppLink>
        <Socials />
    </div>
);
