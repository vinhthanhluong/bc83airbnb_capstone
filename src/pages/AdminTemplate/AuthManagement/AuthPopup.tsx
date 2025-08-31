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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, ChevronDownIcon, CircleUser, Image, Mail, Phone, SquareAsterisk, User, UserRoundPen, VenusAndMars, X } from "lucide-react"
import { useState } from "react";

interface AuthPopupProps {
    mode: "add" | "edit",
    data?: any
}

export default function AuthPopup({ mode, data }: AuthPopupProps) {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form>
                <DialogHeader className="border-b border-gray-200 p-5">
                    <DialogTitle className="flex items-center gap-4">
                        <UserRoundPen className="bg-pink-400 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" />
                        {mode === "add" ? "Thêm người dùng" : "Sửa người dùng"}
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-auto mb-5">
                    <div className="grid sm:grid-cols-2 gap-4 p-5 max-h-[400px]">
                        <div className="grid gap-2">
                            <Label htmlFor="email"><Mail size={18} className="text-red-300" />Email</Label>
                            <Input className="h-10" id="email" name="email" placeholder="Nhập email @gmail.com" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password"><SquareAsterisk size={18} className="text-blue-300" />Mật khẩu</Label>
                            <Input className="h-10" id="password" name="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name"><User size={20} className="text-yellow-400" />Họ tên</Label>
                            <Input className="h-10" id="name" name="name" placeholder="Nhập họ tên" />
                        </div>
                         <div className="grid gap-4 row-span-3">
                            <div className="block space-y-2">
                                <Label htmlFor="picture"><Image size={18} className="text-green-400" />Hình ảnh</Label>
                                <div className="relative flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-51 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="hidden flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>

                                        <img src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg" className="w-full max-h-full object-contain" alt="" />
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                    <X className="absolute z-2 top-1 right-1 cursor-pointer hover:text-red-400 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password"><Phone size={18} className="text-green-400" />Số điện thoại</Label>
                            <Input className="h-10" id="password" name="password" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sec"><VenusAndMars size={19} className="text-pink-300" />Giới tính</Label>
                            <Select defaultValue="nam">
                                <SelectTrigger className="w-full min-h-10">
                                    <SelectValue placeholder="Chọn giới tính" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="nam">Nam</SelectItem>
                                        <SelectItem value="nu">Nữ</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="date" className="px-1">
                                <CalendarDays size={20} className="text-indigo-400" />
                                Ngày sinh
                            </Label>
                            <Popover open={openDate} onOpenChange={setOpenDate}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        id="date"
                                        className="w-full justify-between font-normal h-10"
                                    >
                                        {date ? date.toLocaleDateString("en-GB") : "Chọn ngày"}
                                        <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpenDate(false)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sec"><CircleUser size={20} className="text-orange-300" />Cấp bậc</Label>
                            <Select defaultValue="user">
                                <SelectTrigger className="w-full min-h-10">
                                    <SelectValue placeholder="Chọn cấp bậc" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="user">user</SelectItem>
                                        <SelectItem value="admin">admin</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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
