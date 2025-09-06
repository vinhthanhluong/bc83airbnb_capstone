export interface LocationPagi<T> {
    pageIndex: number;
    pageSize: number;
    totalRow: number;
    keywords: null;
    data: T[];
}

export interface LocationItem {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}