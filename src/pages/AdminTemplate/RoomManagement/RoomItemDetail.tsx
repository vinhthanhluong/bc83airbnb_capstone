import { Search, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";

type RoomItemDetailProps = {
    handleValueOpenPopup: (data: string) => void,
}

export default function RoomItemDetail({  handleValueOpenPopup }: RoomItemDetailProps) {
    const [isAction, setIsAction] = useState<boolean>(false);

    return (
        <div className="space-y-2">
            <div
                onMouseOver={() => setIsAction(true)}
                onMouseLeave={() => setIsAction(false)}
                className={`group ${isAction ? " active" : ""} relative z-0 aspect-square rounded-xl overflow-hidden before:content before:absolute before:inset-0 before:bg-black/20 before:z-1`}>
                <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-center" alt="" />
                <SquarePen
                    onClick={() => handleValueOpenPopup('edit')}
                    size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
                <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
                <Search
                    onClick={() => handleValueOpenPopup('detail')}
                    className="group-[.active]:opacity-100 opacity-0 absolute inset-0 text-white m-auto cursor-pointer z-2 hover:text-blue-300 transition-all duration-300" size={30} />
            </div>
            <div className="block text-sm">
                <p
                    onClick={() => handleValueOpenPopup('detail')}
                    className="font-medium line-clamp-1 mb-0.5 cursor-pointer duration-300 transition-all hover:text-blue-500">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</p>
                <div className="flex justify-between items-center">
                    <p className="line-clamp-1 text-gray-400">Hồ chí minh</p>
                    <p className="line-clamp-1 text-gray-500 font-medium pl-2 shrink-0">28$</p>
                </div>
            </div>
        </div>
    )
}
