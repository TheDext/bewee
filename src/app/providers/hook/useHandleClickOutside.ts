import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getExcludeElement } from 'entities/excludeElement/model/slice';

interface UseOutsideClickProps {
    callback: () => void;
}

const useOutsideClick = ({ callback }: UseOutsideClickProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const excludeElementId = useSelector(getExcludeElement());

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log('event', event);
            console.log('element', document.getElementById(excludeElementId));
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback]);

    return ref;
};

export default useOutsideClick;
