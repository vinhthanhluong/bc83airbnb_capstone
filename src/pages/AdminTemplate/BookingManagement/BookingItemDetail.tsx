import { Eye, Trash2 } from 'lucide-react';

type BookingItemDetailProps = {
    handleValueOpenPopup: (data: string) => void,
}
export default function BookingItemDetail({ handleValueOpenPopup }: BookingItemDetailProps) {
    return (
        <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 text-gray-800">
            <td className="py-3 px-4">
                <p className="font-medium">20/08/2025</p>
            </td>
            <td className="py-3 px-4">
                <p className="">22/08/2025</p>
            </td>
            <td className="py-3 px-4">
                <p className="">3</p>
            </td>
            <td className="py-3 px-4">
                <div className="flex gap-2">
                    <Eye
                        onClick={() => handleValueOpenPopup('detail')}
                        className="cursor-pointer text-blue-500 hover:text-blue-800" size={20} />
                </div>
            </td>
        </tr>
    )
}
