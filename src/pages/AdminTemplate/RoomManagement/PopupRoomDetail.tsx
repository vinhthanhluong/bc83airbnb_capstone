import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Anvil, Bath, Bed, ChefHat, DollarSign, MonitorStop, SquareParking, SunSnow, Users, Warehouse, WashingMachine, WavesLadder, Wifi } from "lucide-react"
import { useState } from "react";

interface PopupRoomDetailProps {
    data?: any
}

export function PopupRoomDetail({ data }: PopupRoomDetailProps) {
    // const [openDate, setOpenDate] = useState<boolean>(false)

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form>
                <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
                    <DialogTitle className="flex items-center gap-4">
                        {/* <Store className="bg-pink-500 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" /> */}
                        {/* Chi tiết phòng */}
                        NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-auto mb-5 sm:mb-2">
                    <div className="max-h-[400px]">
                        <div className="block p-6">
                            <div className="img h-[300px] mb-3">
                                {/* <img src="https://airbnbnew.cybersoft.edu.vn/images/phong2.png" className="max-h-full object-contain" alt="" /> */}
                                <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="max-h-[300px] w-full object-contain" alt="" />
                            </div>
                            <p className="mb-4">Tự nhận phòng Tự nhận phòng bằng khóa thông minh.Dinh Long là Chủ nhà siêu cấp Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.</p>

                            <div className="grid grid-cols-3 mb-4">
                                <div className="flex items-center gap-1">
                                    <p className="font-medium flex items-center gap-1"><Users size={20} className="text-gray-700" />Khách</p>
                                    <p className="">3</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="font-medium flex items-center gap-1"><Warehouse size={20} className="text-gray-700" />Phòng ngủ</p>
                                    <p className="">3</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="font-medium flex items-center gap-1"><Bed size={20} className="text-gray-700" />Giường</p>
                                    <p className="">3</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="font-medium flex items-center gap-1"><Bath size={20} className="text-gray-700" />Phòng tắm</p>
                                    <p className="">3</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="font-medium flex items-center gap-1"><DollarSign size={20} className="text-gray-700" />Giá tiền</p>
                                    <p className="">28</p>
                                </div>
                            </div>

                            <p className="font-medium mb-2">Tiện ích</p>
                            <div className="grid grid-cols-3">
                                <div className="flex items-center gap-1 font-medium line-through text-gray-500">
                                    <WashingMachine size={20} />Máy giặt
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <Anvil size={20} />Bàn ủi
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <MonitorStop size={20} />Tivi
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <SunSnow size={20} />Điều hòa
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <Wifi size={20} />Wifi
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <ChefHat size={20} />Bếp
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <SquareParking size={20} />Bãi đỗ xe
                                </div>
                                <div className="flex items-center gap-1 font-medium ">
                                    <WavesLadder size={20} />Hồ bơi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </DialogContent>
    )
}
