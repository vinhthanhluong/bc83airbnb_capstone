import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
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
import { CalendarDays, ChevronDownIcon, CircleUser, Mail, Phone, SquareAsterisk, User, UserRoundPen, VenusAndMars } from "lucide-react"
import { useState } from "react"

export function PopupAuth() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px] p-0 gap-0">
                    <DialogHeader className="border-b border-gray-200 p-5">
                        <DialogTitle className="flex items-center gap-4"><UserRoundPen className="bg-pink-400 text-white size-13 p-3 rounded-md" />Sửa người dùng</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 p-5">
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
                    <DialogFooter className="p-5 pt-0">
                        <DialogClose asChild>
                            <Button variant="outline">Đóng</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-sky-300 transition-all duration-300">Sửa</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
