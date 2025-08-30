import { MapPinPlusInside, Plus, SquarePen, Trash2 } from "lucide-react";
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

import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
// import { PopupRoom } from "./PopupRoom";
// import { PopupRoomDetail } from "./PopupRoomDetail";

export default function BookingManagement() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)


    const [isAction, setIsAction] = useState<boolean>(false);

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | "detail" | "addRoom" | null>(null);
    const [selectData, setSelectData] = useState(null);

    const dataTest = {};
    const handleOpenPopup = (modeData: any, data?: any) => {
        setMode(modeData)
        setSelectData(data || null);
        setIsOpenPopup(true);
    }

    return (
        <div>
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Quản lý đặt phòng</h2>
                <Button
                    onClick={() => handleOpenPopup('add')}
                    variant="outline" className="absolute top-0 md:top-1 right-0 flex items-center gap-2 text-white bg-pink-400 border-pink-400 font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-pink-400 hover:shadow-[0_0_10px_#e396c1] transition-all duration-300">
                    <MapPinPlusInside />
                    Thêm
                </Button>
            </div>

            <div className="mb-6 flex gap-2 sp400:gap-4">
                <div className="flex flex-col gap-3">
                    <Popover open={openDate} onOpenChange={setOpenDate}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-48 justify-between font-normal"
                            >
                                {date ? date.toLocaleDateString("en-GB") : "Chọn ngày đến"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date)
                                    setOpenDate(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    <Popover open={openDate} onOpenChange={setOpenDate}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-48 justify-between font-normal"
                            >
                                {date ? date.toLocaleDateString("en-GB") : "Chọn ngày đi"}
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                onSelect={(date) => {
                                    setDate(date)
                                    setOpenDate(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
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
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                            <Plus
                                onClick={() => handleOpenPopup('addRoom')}
                                className="absolute inset-0 text-white m-auto cursor-pointer z-2" size={30} />
                        </div>
                        <div className="block text-sm">
                            <p
                                onClick={() => handleOpenPopup('detail')}
                                className="font-medium line-clamp-1 mb-0.5 cursor-pointer duration-300 transition-all hover:text-blue-500">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div
                            onMouseOver={() => setIsAction(true)}
                            onMouseLeave={() => setIsAction(false)}
                            className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                            <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                            <SquarePen
                                onClick={() => handleOpenPopup('edit')}
                                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                        </div>
                        <div className="block text-sm">
                            <p className="font-medium line-clamp-1 mb-0.5">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                            <div className="flex justify-between items-center">
                                <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                                <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex items-center justify-between flex-col gap-3 lg:flex-row px-6 py-5 border-t border-gray-200">
                    <p className="text-gray-500 text-sm text-center">Hiển thị 14 phòng mỗi trang <span className="sm:inline-block hidden">-</span><br className="sm:hidden" /> Tổng cộng 24 phòng</p>

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
                {/* {mode === "add" && <PopupRoom mode="add" />}
                {mode === "edit" && <PopupRoom mode="edit" data={selectData} />}
                {mode === "detail" && <PopupRoomDetail data={selectData} />} */}
            </Dialog>
        </div>
    )
}
