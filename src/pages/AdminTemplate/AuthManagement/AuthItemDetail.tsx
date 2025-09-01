import type { ListUser } from '@/interface/user.interface';
import { SquarePen, Trash2 } from 'lucide-react';
import { format } from 'date-fns'
import { useRemoveUser } from '@/hooks/useUserQuery';
import { confirmDialog } from '@/utils/dialog';

type AuthItemDetailProps = {
    data: ListUser
    handleValueOpenPopup: (data: string) => void,
}
export default function AuthItemDetail({ data, handleValueOpenPopup }: AuthItemDetailProps) {
    const birthday = data.birthday.replaceAll('-', '/').slice(0, 10)

    // API
    const { mutate: mutateRemove, isPending: isPendingRemove } = useRemoveUser();

    const handleDelete = (id: number) => {
        confirmDialog({
            title: "Bạn có chắc chắn xóa không"
        }).then((result) => {
            if (result.isConfirmed) {
                mutateRemove(id)
            }
        });
    }

    return (
        <tr className="bg-white border-b border-gray-200 hover:bg-gray-50 text-gray-800">
            <td className="py-3 px-4">
                <div className="size-12 rounded-full bg-gray-300 rounded overflow-hidden">
                    {
                        data.avatar ?
                            (<img className="w-full h-full object-cover" alt={data.name} src={data.avatar} />) :
                            (
                                <div className="cursor-pointer w-full h-full flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-300 rounded-full">
                                    <p className="text-lg text-white font-medium">
                                        {data.role === 'ADMIN' ? 'Ad' : "Us"}
                                    </p>
                                </div>
                            )
                    }
                </div>
            </td>
            <td className="py-3 px-4">
                <p className="font-medium">{data.name}</p>
            </td>
            <td className="py-3 px-4">
                <p className="">{data.email}</p>
            </td>
            <td className="py-3 px-4">
                <p className=" ">{data.password}</p>
            </td>
            <td className="py-3 px-4">
                <p className="">{birthday}</p>
                {/* <p className="">{birthday&& format(new Date(birthday), "dd/MM/yyyy")}</p> */}
            </td>
            <td className="py-3 px-4">
                <p className="">{data.phone}</p>
            </td>
            <td className="py-3 px-4">
                <p className="">{data.gender ? "Nam" : "Nữ"}</p>
            </td>
            <td className="py-3 px-4">
                <p className="">{data.role.toUpperCase()}</p>
            </td>
            <td className="py-3 px-4">
                <div className="flex gap-2">
                    <SquarePen
                        onClick={() => handleValueOpenPopup('edit')}
                        className="cursor-pointer text-yellow-500 hover:text-yellow-800" size={20} />
                    <Trash2 onClick={() => handleDelete(data.id)} className="cursor-pointer text-red-500 hover:text-red-800" size={20} />
                </div>
            </td>
        </tr>
    )
}
