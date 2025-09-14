import { HousePlus } from "lucide-react";
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
import RoomPopup from "./RoomPopup";
import RoomPopupDetail from "./RoomPopupDetail";
import RoomItemDetail from "./RoomItemDetail";
import { useListRoom } from "@/hooks/useRoomQuery";
import type { RoomItem } from "@/interface/room.interface";
import PaginationCustom from "../_components/PaginationCustom";
import { usePaginationStore } from "@/store/pagination.store";

export default function RoomManagement() {
    // State
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | "detail" | null>(null);
    const [popupData, setPopupData] = useState(null);

    // Store
    const { roomPagi, setRoomPagi } = usePaginationStore();

    // Handle
    const handleOpenPopup = (modeData: any, data?: any) => {
        setMode(modeData)
        setPopupData(data || null);
        setIsOpenPopup(true);
    }

    const handleValueOpenPopup = (data: string) => {
        handleOpenPopup(data);
    }

    // Api
    const { data: dataListRoom, isLoading: isLoadingListRoom } = useListRoom(roomPagi, 10);


    return (
        <>
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Quản lý phòng</h2>
                <Button
                    onClick={() => handleOpenPopup('add')}
                    variant="outline" className="absolute top-0 md:top-1 right-0 flex items-center gap-2 text-white bg-pink-400 border-pink-400 font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-pink-400 hover:shadow-[0_0_10px_#e396c1] transition-all duration-300">
                    <HousePlus />
                    Thêm
                </Button>
            </div>

            <div className="mb-6 flex gap-2 sp400:gap-4">
                <Input placeholder="Tìm phòng" className="max-w-85 h-10" />
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
                <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 2xl:gap-5 p-6">
                    {dataListRoom?.data?.map((item: RoomItem, index: number) => (
                        <RoomItemDetail key={index} data={item} handleValueOpenPopup={handleValueOpenPopup} />
                    ))}
                </div>
                <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5 border-t border-gray-200">
                    <p className="text-gray-500 text-sm text-center">Hiển thị {dataListRoom?.pageSize} phòng mỗi trang <span className="sm:inline-block hidden">-</span><br className="sm:hidden" /> Tổng cộng {dataListRoom?.totalRow} phòng</p>

                    <div className="block">
                        <PaginationCustom setPagi={setRoomPagi} pageIndex={dataListRoom?.pageIndex} pageSize={dataListRoom?.pageSize} totalRow={dataListRoom?.totalRow} />
                    </div>
                </div>
            </div>
            <Dialog open={isOpenPopup} onOpenChange={setIsOpenPopup}>
                {mode === "add" && <RoomPopup mode="add" />}
                {mode === "edit" && <RoomPopup mode="edit" data={popupData} />}
                {mode === "detail" && <RoomPopupDetail data={popupData} />}
            </Dialog>
        </>
    )
}
