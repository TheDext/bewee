import { useDispatch } from 'react-redux';
import { FC } from 'react';

interface CatalogItemProps {
    className: string;
    catalog: {
        _id: string;
        name: string;
        subcatalog?: boolean;
    }[];
}

export const CatalogItem: FC<CatalogItemProps> = ({ className, catalog }) => {
    const dispatch = useDispatch();

    const handleClick = (subcatalog: boolean, _id: string) => {
        if (!subcatalog) {
            return;
        }
        dispatch({ type: 'catalogIcon/setupSubCatalog', payload: _id });
    };
    return (
        <ul className={className}>
            {catalog.map(({ _id, name, subcatalog }) => {
                return (
                    <li key={_id} onClick={() => handleClick(subcatalog, _id)}>
                        {subcatalog ? `${name} -->` : name}
                    </li>
                );
            })}
        </ul>
    );
};
