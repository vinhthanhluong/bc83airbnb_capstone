import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarDays, ChevronDownIcon, House, User } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddLocation, useDetailLocation, useUpdateLocation } from "@/hooks/useLocationQuery"
import type { LocationItem } from "@/interface/location.interface"
import { locationManagementStore } from "@/store/locationManagement.store"
import { Building2, Earth, Image, MapPin, MapPinned, X } from "lucide-react"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

interface BookingPopupProps {
  mode: "add" | "edit",
}

export function BookingPopup({ mode }: BookingPopupProps) {
  console.log("🌲 ~ BookingPopup ~ mode:", mode)
  // Store

  // State
  const [openCheckIn, setOpenCheckIn] = useState(false)
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined)

  const [openCheckOut, setOpenCheckOut] = useState(false)
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined)

  // API

  // Form

  return (
    <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
      <form>
        <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
          <DialogTitle className="flex items-center gap-4">
            {mode === "add" ? "Đặt phòng" : "Sửa phòng"}
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-auto mb-5 sm:mb-2">
          <div className="grid sm:grid-cols-2 gap-4 p-5 max-h-[400px]">
            <div className="grid gap-2">
              <Label htmlFor="date1" className="px-1">
                <CalendarDays size={18} className="text-amber-500" />Ngày đến
              </Label>
              <Popover open={openCheckIn} onOpenChange={setOpenCheckIn}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date1"
                    className="justify-between font-normal"
                  >
                    {checkInDate ? checkInDate.toLocaleDateString("en-GB") : "Chọn ngày đến"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    captionLayout="dropdown"
                    onSelect={(checkInDate) => {
                      setCheckInDate(checkInDate)
                      setOpenCheckIn(openCheckIn)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date2" className="px-1">
                <CalendarDays size={18} className="text-fuchsia-400" />Ngày đi
              </Label>
              <Popover open={openCheckOut} onOpenChange={setOpenCheckOut}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date2"
                    className="justify-between font-normal"
                  >
                    {checkOutDate ? checkOutDate.toLocaleDateString("en-GB") : "Chọn ngày đi"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    captionLayout="dropdown"
                    onSelect={(checkOutDate) => {
                      setCheckOutDate(checkOutDate)
                      setOpenCheckOut(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2 col-span-2">
              <Label htmlFor="name"><User size={18} className="text-blue-300" />Số lượng khách</Label>
              <Input className="h-10" id="name" placeholder="Nhập số khách" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name"><MapPin size={18} className="text-red-300" />Vị trí</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn vị trí" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name"><House size={18} className="text-green-300" />Phòng</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn phòng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
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
          <Button type="submit" className="bg-sky-300 transition-all duration-300 cursor-pointer">
            {mode === "add" ? "Thêm" : "Cập nhật"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
