import { MapPinPlusInside } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dialog } from "@/components/ui/dialog";
import { LocationPopup } from "./LocationPopup";
import LocationItemDetail from "./LocationItemDetail";

export default function LocationManagement() {

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | null>(null);
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
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Quản lý vị trí</h2>
                <Button
                    onClick={() => handleOpenPopup('add')}
                    variant="outline" className="absolute top-0 md:top-1 right-0 flex items-center gap-2 text-white bg-pink-400 border-pink-400 font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-pink-400 hover:shadow-[0_0_10px_#e396c1] transition-all duration-300">
                    <MapPinPlusInside />
                    Thêm
                </Button>
            </div>

            <div className="mb-6 flex gap-2 sp400:gap-4">
                <Input placeholder="Tìm vị trí" className="max-w-85 h-10" />
                <Select defaultValue="user">
                    <SelectTrigger className="w-[180px] min-h-10">
                        <SelectValue placeholder="Loại" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="user">Hồ chí minh</SelectItem>
                        <SelectItem value="admin">Hà nội</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="border border-[#eee] rounded-lg shadow-sm w-full">
                <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 2xl:gap-5 p-6">
                    <LocationItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                    <LocationItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                    <LocationItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                    <LocationItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                    <LocationItemDetail handleValueOpenPopup={handleValueOpenPopup} />
                </div>
                <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5 border-t border-gray-200">
                    <p className="text-gray-500 text-sm text-center">Hiển thị 14 vị trí mỗi trang <span className="sm:inline-block hidden">-</span><br className="sm:hidden" /> Tổng cộng 24 vị trí</p>

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
                {mode === "add" && <LocationPopup mode="add" />}
                {mode === "edit" && <LocationPopup mode="edit" data={selectData} />}
            </Dialog>
        </>
    )
}
