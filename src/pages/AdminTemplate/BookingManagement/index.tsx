import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Dialog } from "@/components/ui/dialog";

import BookingItemDetail from "./BookingItemDetail";
import BookingPopupDetail from "./BookingPopupDetail";

export default function BookingManagement() {
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "detail" | null>(null);
    const [selectData, setSelectData] = useState(null);

    const handleOpenPopup = (modeData: any, data?: any) => {
        setMode(modeData)
        setSelectData(data || null);
        setIsOpenPopup(true);
    }

    const handleValueOpenPopup = (data: string) => {
        handleOpenPopup(data)
    }

    return (
        <>
            <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 min-w-[1240px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Ngày đến</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Ngày đi</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Số lượng khách</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BookingItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5">
                    <p className="text-gray-500 text-sm text-center">Hiển thị 5 người dùng mỗi trang <span className="sm:inline-block hidden">-</span><br className="sm:hidden" /> Tổng cộng 24 người dùng</p>

                    <div className="block">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>10</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
            <Dialog open={isOpenPopup} onOpenChange={setIsOpenPopup}>
                {mode === "detail" && <BookingPopupDetail data={selectData} />}
            </Dialog>
        </>
    )
}
