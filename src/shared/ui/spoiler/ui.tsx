import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as classes from './styles.module.scss';

interface SpoilerProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Spoiler: React.FC<SpoilerProps> = ({
    title,
    children,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.spoiler}>
            <button onClick={handleToggle} className={classes.spoiler__title}>
                {title}
            </button>
            <CSSTransition
                in={isOpen}
                timeout={400}
                classNames={{
                    enter: classes.spoiler__contentEnter,
                    enterActive: classes.spoiler__contentEnterActive,
                    exit: classes.spoiler__contentExit,
                    exitActive: classes.spoiler__contentExitActive,
                }}
                unmountOnExit
            >
                <div ref={contentRef} className={classes.spoiler__content}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};
