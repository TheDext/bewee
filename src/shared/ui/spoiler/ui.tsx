import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as classes from './styles.module.scss';
import classNames from 'shared/lib/classNames/classNames';

interface SpoilerProps {
    title: string;
    children: React.ReactNode;
    classTitle?: string;
    classEnter: string;
    classEnterActive: string;
    classExit: string;
    classExitActive: string;
}

export const Spoiler: React.FC<SpoilerProps> = ({
    title,
    children,
    classTitle,
    classEnter,
    classEnterActive,
    classExit,
    classExitActive,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.spoiler}>
            <button
                onClick={handleToggle}
                className={classNames(
                    classes.spoiler__title,
                    { [classTitle]: classTitle, [classes._isOpen]: isOpen },
                    []
                )}
            >
                {title}
            </button>
            <CSSTransition
                in={isOpen}
                timeout={400}
                classNames={{
                    enter: classEnter,
                    enterActive: classEnterActive,
                    exit: classExit,
                    exitActive: classExitActive,
                }}
                unmountOnExit
            >
                <div className={classes.spoiler__content}>{children}</div>
            </CSSTransition>
        </div>
    );
};
