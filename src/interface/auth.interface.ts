
export interface AuthApiResponse<T> {
    user: T;
    token: string;
}

export interface CurrentUser {
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