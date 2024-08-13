//@ts-nocheck

import { FC } from 'react';

interface CatalogListProps {
    list: { _id: string; name: string }[];
    className?: string;
    handleClick?: () => void;
}

export const CatalogList: FC<CatalogListProps> = ({
    list,
    className,
    handleClick,
}) => {
    return (
        <ul className={className}>
            {list.map(({ _id, name }) => (
                <li
                    key={_id}
                    onClick={() => (handleClick ? handleClick(_id) : null)}
                >
                    {name}
                </li>
            ))}
        </ul>
    );
};
