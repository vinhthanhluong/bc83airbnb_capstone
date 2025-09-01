export interface ListUserPagi<T> {
    pageIndex: number;
    pageSize: number;
    totalRow: number;
    keywords: null;
    data: T[];
}

export interface ListUser {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    avatar: string;
    gender: boolean;
    role: string;
}

export interface UserPostResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    // avatar?: null | File;
    gender: boolean;
    role: string;
}

