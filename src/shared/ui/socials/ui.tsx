import { AppLink } from 'shared/ui/appLink/ui';
import * as classes from './styles.module.scss';
import { socialIcons } from 'shared/ui/socials/index';

export const Socials = () => {
    return (
        <div className={classes.socials}>
            <AppLink className={classes.socials__tel} to="tel:+70000000000">
                +7 (952) 869 94 19
            </AppLink>
            <div className={classes.socials__icons}>
                {socialIcons.map((Icon, index) => (
                    <div key={index} className={classes.socials__icon}>
                        <Icon />
                    </div>
                ))}
            </div>
        </div>
    );
};
