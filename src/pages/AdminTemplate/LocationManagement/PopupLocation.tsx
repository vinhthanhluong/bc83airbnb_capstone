import { Button } from "@/components/ui/button"
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Earth, Image, MapPin, MapPinned, UserRoundPen, X } from "lucide-react"
import { useState } from "react";

interface PopupAuthProps {
    mode: "add" | "edit",
    data?: any
}

export function PopupLocation({ mode, data }: PopupAuthProps) {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form>
                <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
                    <DialogTitle className="flex items-center gap-4"><MapPinned className="bg-pink-500 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" />
                        {mode === "add" ? "Thêm vị trí" : "Sửa vị trí"}
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-auto mb-5 sm:mb-2">
                    <div className="grid sm:grid-cols-2 gap-4 p-5 max-h-[400px]">
                        <div className="grid gap-2">
                            <Label htmlFor="name"><MapPin size={18} className="text-red-300" />Tên vị trí</Label>
                            <Input className="h-10" id="name" name="name" placeholder="Nhập tên vị trí" />
                        </div>
                        <div className="grid gap-4 row-span-3">
                            <div className="block space-y-2">
                                <Label htmlFor="picture"><Image size={18} className="text-green-400" />Hình ảnh</Label>
                                <Input id="picture" type="file" />
                            </div>
                            <div className="max-h-[170px] relative">
                                <X className="absolute -top-1 right-0 cursor-pointer hover:text-red-400 transition-all duration-300"/>
                                <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full h-full object-contain" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="city"><Building2 size={18} className="text-blue-300" />Tỉnh thành</Label>
                            <Input className="h-10" id="city" name="city" placeholder="Nhập tỉnh thành" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="country"><Earth size={20} className="text-yellow-400" />Quốc gia</Label>
                            <Input className="h-10" id="country" name="country" placeholder="Nhập quốc gia" />
                        </div>


                    </div>
                </div>
                <DialogFooter className="p-5 pt-0">
                    <DialogClose asChild>
                        <Button variant="outline">Đóng</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-sky-300 transition-all duration-300 cursor-pointer">{mode === "add" ? "Thêm" : "Cập nhật"}</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
