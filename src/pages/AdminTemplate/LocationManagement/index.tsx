import { MapPinPlusInside, SquarePen, Trash2 } from "lucide-react";
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
import { PopupLocation } from "./PopupLocation";

export default function LocationManagement() {
    const [isAction, setIsAction] = useState<boolean>(false);

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | null>(null);
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
                    <div
                        onMouseOver={() => setIsAction(true)}
                        onMouseLeave={() => setIsAction(false)}
                        className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-3 inset-x-3 text-white 2xl:bottom-5 2xl:inset-x-5">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen
                            onClick={() => handleOpenPopup('edit')}
                            size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>

                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
                    <div className="group/itemLocal cursor-pointer relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1">
                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                        <div className="absolute z-2 bottom-5 left-5 right-5 text-white">
                            <p className="text-lg font-bold line-clamp-1">Quận 1</p>
                            <p className="text-sm line-clamp-1">Hồ chí minh</p>
                        </div>
                        <SquarePen size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                        <Trash2 size={20} className="group-hover/itemLocal:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                    </div>
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
                {mode === "add" && <PopupLocation mode="add" />}
                {mode === "edit" && <PopupLocation mode="edit" data={selectData} />}
            </Dialog>
        </div>
    )
}
