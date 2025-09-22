import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

import BookingItemDetail from "./BookingItemDetail";
import BookingPopupDetail from "./BookingPopupDetail";
import { useBookingManagementStore } from "@/store/bookingManagement.store";
import { useDetailUserBooking } from "@/hooks/useBookingQuery";
import { useParams } from "react-router-dom";
import type { BookingItem } from "@/interface/booking.interface";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BookingPopup } from "./BookingPopup";

export default function BookingManagement() {
    // State
    // const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [mode, setMode] = useState<"add" | "edit" | "detail" | null | string>(null);

    // Param
    const { userID } = useParams<string>()

    // Store
    const { isPopup, setIsPopup , setIdBooking } = useBookingManagementStore()

    // Handle
    const handleOpenPopup = (modeData: string) => {
        setMode(modeData)
        setIsPopup()
    }

    const handleValueOpenPopup = (modeData: string) => {
        handleOpenPopup(modeData)
    }

    // Api
    const { data: dataBooking } = useDetailUserBooking(String(userID));

    return (
        <>
            <div className="relative">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Đặt phòng</h2>
                <Button
                    onClick={() => {
                        handleOpenPopup('add')
                        setIdBooking(0)
                    }}
                    variant="outline" className="absolute top-0 md:top-1 right-0 flex items-center gap-2 text-white bg-pink-400 border-pink-400 font-semibold h-full p-2 md:px-3 rounded-md cursor-pointer hover:bg-white hover:text-pink-400 hover:shadow-[0_0_10px_#e396c1] transition-all duration-300">
                    <Plus size={20} /> Thêm
                </Button>
            </div>
            <div className="border border-[#eee] rounded-lg shadow-sm w-full ">
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 min-w-[1240px]">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Ngày đến</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Ngày đi</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[13%]">Mã phòng</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Số lượng khách</th>
                                <th className="py-3 px-4 font-medium text-gray-600 w-[11%]">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataBooking?.map((item: BookingItem, index: number) => {
                                return <BookingItemDetail key={index} data={item} handleValueOpenPopup={handleValueOpenPopup} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Dialog open={isPopup} onOpenChange={setIsPopup}>
                {mode === "add" && <BookingPopup mode={mode} />}
                {mode === "edit" && <BookingPopup mode={mode} />}
                {mode === "detail" && <BookingPopupDetail />}
            </Dialog>
        </>
    )
}
