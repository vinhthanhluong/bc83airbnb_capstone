import { SquarePen, Trash2 } from 'lucide-react';

type AuthItemDetailProps = {
    data?: any
    handleValueOpenPopup: (data: string) => void,
}
export default function AuthItemDetail({ data, handleValueOpenPopup }: AuthItemDetailProps) {
    return (
        <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 text-gray-800">
            <td className="py-3 px-4">
                <div className="size-12 rounded-full bg-gray-300 rounded overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Lật mặt 48h" src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" />
                </div>
            </td>
            <td className="py-3 px-4">
                <p className="font-medium">Luong vinh tahnh</p>
            </td>
            <td className="py-3 px-4">
                <p className="">thanh2508@gmail.com</p>
            </td>
            <td className="py-3 px-4">
                <p className=" ">thanh2508@gmail.com</p>
            </td>
            <td className="py-3 px-4">
                <p className="">05/05/1999</p>
            </td>
            <td className="py-3 px-4">
                <p className="">123123123</p>
            </td>
            <td className="py-3 px-4">
                <p className="">Nam</p>
            </td>
            <td className="py-3 px-4">
                <p className="">USER</p>
            </td>
            <td className="py-3 px-4">
                <div className="flex gap-2">
                    <SquarePen
                        onClick={() => handleValueOpenPopup('edit')}
                        className="cursor-pointer text-yellow-500 hover:text-yellow-800" size={20} />
                    <Trash2 className="cursor-pointer text-red-500 hover:text-red-800" size={20} />
                </div>
            </td>
        </tr>
    )
}
