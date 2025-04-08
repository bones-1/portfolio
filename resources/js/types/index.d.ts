export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    props: object;
};

export interface serverData {
    products: Array<object>;
}

export interface LinksList {
    href: string;
    title: string;
}

export type productArray = {
    product: [
        id: number,
        category: string,
        price: number,
        name: number,
        stocked: boolean,
    ];
};
