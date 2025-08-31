import { SquarePen, Trash2, UserPlus } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import AuthPopup from "./AuthPopup";
import AuthItemDetail from "./AuthItemDetail";

export default function AuthManagement() {

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | "history" | "detail" | null>(null);
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
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Quản lý người dùng</h2>
                <Button
                    onClick={() => handleOpenPopup('add')}
                    variant="outline" className="absolute top-0 md:top-1 right-0 flex items-center gap-2 text-white bg-pink-400 border-pink-400 font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-pink-400 hover:shadow-[0_0_10px_#e396c1] transition-all duration-300"><UserPlus size={20} /> Thêm</Button>
            </div>

            <div className="mb-6 flex gap-2 sp400:gap-4">
                <Input placeholder="Tìm người dùng" className="max-w-85 h-10" />
                <Select defaultValue="user">
                    <SelectTrigger className="w-[180px] min-h-10">
                        <SelectValue placeholder="Loại" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="user">Khách hàng</SelectItem>
                        <SelectItem value="admin">Quản trị</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 min-w-[1240px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[7%]">Avatar</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Họ và tên</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Email</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Mật khẩu</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Ngày sinh</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[12%]">Số điện thoại</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Giới tính</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Cấp bậc</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AuthItemDetail handleValueOpenPopup={handleValueOpenPopup} />
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
                {mode === "add" && <AuthPopup mode="add" />}
                {mode === "edit" && <AuthPopup mode="edit" data={selectData} />}
            </Dialog>
        </>
    )
}
