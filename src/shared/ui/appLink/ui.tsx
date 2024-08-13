import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'shared/lib/classNames/classNames';
import * as classes from './styles.module.scss';

interface AppLinkProps extends LinkProps {
    className: string;
}

export const AppLink: FC<AppLinkProps> = ({
    children,
    className,
    to,
    ...props
}) => {
    return (
        <Link
            to={to}
            className={classNames(classes.appLink, {}, [className])}
            {...props}
        >
            {children}
        </Link>
    );
};
