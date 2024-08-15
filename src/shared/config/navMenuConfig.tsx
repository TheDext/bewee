interface NavMenuItem {
    name: string;
    path: string;
}

export const navMenuConfig: Record<string, NavMenuItem> = {
    about: {
        name: 'О нас',
        path: '/',
    },
    delivery: {
        name: 'Оплата и доставка',
        path: 'delivery',
    },
    reviews: {
        name: 'Отызвы',
        path: 'reviews',
    },
    faq: {
        name: 'FAQ',
        path: 'faq',
    },
    contacts: {
        name: 'Контакты',
        path: 'contacts',
    },
};
