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
import { Textarea } from "@/components/ui/textarea"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Anvil, Bath, Bed, ChefHat, DollarSign, Image, MapPin, MonitorStop, NotebookPen, School, SquareParking, Store, SunSnow, Users, WashingMachine, WavesLadder, Wifi, X } from "lucide-react"

interface RoomPopupProps {
    mode: "add" | "edit",
    data?: any
}

export default function RoomPopup({ mode, data }: RoomPopupProps) {

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form>
                <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
                    <DialogTitle className="flex items-center gap-4"><Store className="bg-pink-500 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" />
                        {mode === "add" ? "Thêm" : "Sửa"} phòng
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-auto mb-5 sm:mb-2">
                    <div className="max-h-[400px]">
                        <div className="grid sm:grid-cols-2 gap-4 p-5">
                            <div className="grid gap-2">
                                <Label htmlFor="name"><Store size={18} className="text-red-300" />Tên phòng</Label>
                                <Input className="h-10" id="name" name="name" placeholder="Nhập tên phòng" />
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
                                <Label htmlFor="client"><Users size={18} className="text-blue-500" />Khách</Label>
                                <Input className="h-10" id="client" name="client" placeholder="Nhập số khách" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bathroom"><DollarSign size={20} className="text-green-400" />Giá phòng</Label>
                                <Input className="h-10" id="bathroom" name="bathroom" placeholder="Nhập giá phòng" />
                            </div>
                            <div className="grid gap-2 row-span-2">
                                <Label htmlFor="desc"><NotebookPen size={20} className="text-fuchsia-500" />Mô tả</Label>
                                <Textarea id="desc" placeholder="Type your message here." className="h-[124px]" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bedroom"><School size={20} className="text-orange-400" />Phòng ngủ</Label>
                                <Input className="h-10" id="bedroom" name="bedroom" placeholder="Nhập phòng ngủ" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bed"><Bed size={20} className="text-cyan-500" />Giường</Label>
                                <Input className="h-10" id="bed" name="bed" placeholder="Nhập số giường" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bathroom"><Bath size={20} className="text-yellow-400" />Phòng tắm</Label>
                                <Input className="h-10" id="bathroom" name="bathroom" placeholder="Nhập phòng tắm" />
                            </div>
                            <div className="grid gap-2">
                                <Label><MapPin size={20} className="text-rose-500" />Vị trí</Label>
                                <Select defaultValue="admin">
                                    <SelectTrigger className="w-full min-h-10">
                                        <SelectValue placeholder="Loại" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tất cả</SelectItem>
                                        <SelectItem value="user">Hồ chí minh</SelectItem>
                                        <SelectItem value="admin">Hà nội</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                            <p className="font-medium mb-0 col-span-2 sm:col-span-3 lg:col-span-4">Tiện ích</p>
                            <div className="grid gap-2">
                                <Label><WashingMachine size={20} className="text-gray-500" />Máy giặt</Label>
                                <RadioGroup defaultValue="washing2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="washing1" id="washing1" />
                                        <Label htmlFor="washing1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="washing2" id="washing2" />
                                        <Label htmlFor="washing2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><Anvil size={20} className="text-gray-500" />Bàn ủi</Label>
                                <RadioGroup defaultValue="iron2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="iron1" id="iron1" />
                                        <Label htmlFor="iron1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="iron2" id="iron2" />
                                        <Label htmlFor="iron2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><MonitorStop size={20} className="text-gray-500" />Tivi</Label>
                                <RadioGroup defaultValue="tivi2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="tivi1" id="tivi1" />
                                        <Label htmlFor="tivi1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="tivi2" id="tivi2" />
                                        <Label htmlFor="tivi2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><SunSnow size={20} className="text-gray-500" />Điều hòa</Label>
                                <RadioGroup defaultValue="conditioning2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="conditioning1" id="conditioning1" />
                                        <Label htmlFor="conditioning1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="conditioning2" id="conditioning2" />
                                        <Label htmlFor="conditioning2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><Wifi size={20} className="text-gray-500" />Wifi</Label>
                                <RadioGroup defaultValue="wifi2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="wifi1" id="wifi1" />
                                        <Label htmlFor="wifi1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="wifi2" id="wifi2" />
                                        <Label htmlFor="wifi2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><ChefHat size={20} className="text-gray-500" />Bếp</Label>
                                <RadioGroup defaultValue="kitchen2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="kitchen1" id="kitchen1" />
                                        <Label htmlFor="kitchen1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="kitchen2" id="kitchen2" />
                                        <Label htmlFor="kitchen2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><SquareParking size={20} className="text-gray-500" />Bãi đỗ xe</Label>
                                <RadioGroup defaultValue="parking2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="parking1" id="parking1" />
                                        <Label htmlFor="parking1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="parking2" id="parking2" />
                                        <Label htmlFor="parking2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label><WavesLadder size={20} className="text-gray-500" />Hồ bơi</Label>
                                <RadioGroup defaultValue="pool2" className="flex gap-4">
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="pool1" id="pool1" />
                                        <Label htmlFor="pool1">Có</Label>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <RadioGroupItem value="pool2" id="pool2" />
                                        <Label htmlFor="pool2">Không</Label>
                                    </div>
                                </RadioGroup>
                            </div>
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
