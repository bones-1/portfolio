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

export interface Links {
    href: string;
    title: string;
    subList?: LinksList;
}

export type LinksList = Links[];

export type productArray = {
    product: [
        id: number,
        category: string,
        price: number,
        name: number,
        stocked: boolean,
    ];
};

export type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    avatar: FileList | null;
};

export type InputChangeEvent = ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement & {
        files: FileList | null;
        name: keyof FormInputs;
    };
};

export type NormalEventInfo = {
    event: 'changed';
    type: string;
    name: keyof FormInputs;
    files: FileList | null;
    value: string;
};

export type SubmitEventInfo = {
    event: 'submitted';
    value: FormInputs;
};

export type DispatchEventInfo = NormalEventInfo | SubmitEventInfo;