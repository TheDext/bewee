import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getExcludeElement } from 'entities/excludeElement/model/slice';

interface UseOutsideClickProps {
    callback: (event: MouseEvent) => void; // Передаем событие в callback
}

const useOutsideClick = ({ callback }: UseOutsideClickProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const excludeElementId = useSelector(getExcludeElement());

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedEl = event.target as HTMLElement; // Получаем кликнутый элемент
            const excludeEl = document.getElementById(excludeElementId);

            if (excludeEl && excludeEl.contains(clickedEl)) {
                console.log('Пропускаем. Это исключение');
                return;
            }

            if (ref.current && !ref.current.contains(clickedEl)) {
                callback(event); // Передаем событие в callback
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [callback]);

    return ref;
};

export default useOutsideClick;
