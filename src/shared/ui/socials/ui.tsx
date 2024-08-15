import * as classes from './styles.module.scss';
import { socialIcons } from 'shared/ui/socials/index';

export const Socials = () => {
    return (
        <div className={classes.socials}>
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
