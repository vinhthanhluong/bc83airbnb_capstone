import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Anvil, Bath, Bed, Building2, ChefHat, DollarSign, Earth, Image, MapPin, MapPinned, MonitorStop, NotebookPen, School, SquareParking, Store, SunSnow, Users, WashingMachine, WavesLadder, Wifi, X } from "lucide-react"
import { useState } from "react";

import { Calendar } from "@/components/ui/calendar"
import type { DateRange } from "react-day-picker";

interface PopupAuthProps {
    // mode: "add" | "edit",
    data?: any
}

export function PopupAddRoom({ data }: PopupAuthProps) {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(2025, 5, 12),
        to: new Date(2025, 6, 15),
    })
    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form>
                {/* <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
                    <DialogTitle className="flex items-center gap-4"><Store className="bg-pink-500 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" />
                        phòng ádasd
                    </DialogTitle>
                </DialogHeader> */}
                <div className="overflow-auto mb-5 sm:mb-2">
                    <div className="max-h-[400px]">

                        <div className="block p-5">
                            <p className="font-medium mb-1 text-lg">Thông tin người đặt phòng</p>
                            <ul>
                                <li>Hình ảnh: Khách hàng</li>
                                <li>Tên: Đặng Nguyễn Thiện Lộc</li>
                                <li>Email: dangntloc0407@gmail.com</li>
                                <li>Số điện thoại: 0968235086</li>
                                <li>Ngày sinh: 30/06/1997</li>
                                <li>Giới tính: Nam</li>
                                <li>Cấp: Khách hàng</li>
                            </ul>
                            {/* box */}
                            {/* <p className="font-medium mb-0 col-span-2 sm:col-span-3 lg:col-span-4">Tiện ích</p> */}

                        </div>
                    </div>
                </div>
                <DialogFooter className="p-5 pt-0">
                    <DialogClose asChild>
                        <Button variant="outline">Đóng</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-sky-300 transition-all duration-300 cursor-pointer">zxczxc</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
