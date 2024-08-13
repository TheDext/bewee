import { useLayoutEffect, useState } from 'react';

const UseMatchMedia = () => {
    const screens = ['isMobile', 'isTablet', 'isDesktop'];
    const queries = [
        '(max-width: 768px)',
        '(min-width: 769px) and (max-width: 992px)',
        '(min-width: 993px)',
    ];

    const mediaQueriesList = queries.map(matchMedia);

    const matches = () => mediaQueriesList.map((mql) => mql.matches);
    const [values, setValues] = useState(matches);

    useLayoutEffect(() => {
        const handler = () => setValues(matches);
        mediaQueriesList.forEach((mql) =>
            mql.addEventListener('change', handler)
        );
        return () =>
            mediaQueriesList.forEach((mql) =>
                mql.removeEventListener('change', handler)
            );
    });

    return screens.reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );
};

export default UseMatchMedia;
