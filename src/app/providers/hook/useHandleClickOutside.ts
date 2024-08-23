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
            const clickedEl = event.target as HTMLElement;

            if (excludeElementId) {
                const yeah =
                    clickedEl.closest(`#${excludeElementId}`) ||
                    clickedEl.id === excludeElementId;
                if (yeah) {
                    console.log('Не дёргаемся');
                }
            }
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
