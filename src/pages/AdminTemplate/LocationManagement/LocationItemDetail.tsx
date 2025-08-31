import { SquarePen, Trash2 } from 'lucide-react'
import { useState } from 'react';

type LocationItemDetailProps = {
    handleValueOpenPopup: (data: string) => void
}

export default function LocationItemDetail({ handleValueOpenPopup }: LocationItemDetailProps) {
    const [isAction, setIsAction] = useState<boolean>(false);

    return (
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
                onClick={() => handleValueOpenPopup('edit')}
                size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 right-4 text-white cursor-pointer hover:text-yellow-300 transition-all duration-300" />
            <Trash2 size={20} className="group-[.active]:opacity-100 opacity-0 absolute z-2 top-4 left-4 text-white cursor-pointer hover:text-red-400 transition-all duration-300" />
        </div>
    )
}
