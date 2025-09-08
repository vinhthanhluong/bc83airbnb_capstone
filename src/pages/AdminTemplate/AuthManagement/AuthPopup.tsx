import { CalendarDays, ChevronDownIcon, CircleUser, LoaderCircle, Mail, Phone, SquareAsterisk, User, UserRoundPen, VenusAndMars } from "lucide-react"
import { useForm, Controller } from "react-hook-form"
import { useEffect, useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import type { UserPostResponse } from "@/interface/user.interface"
import { useAddUser, useDetailUser, useUpdateUser } from "@/hooks/useUserQuery";
import { useUserManagementStore } from "@/store/userManagement.store";

interface AuthPopupProps {
    mode: "add" | "edit",
}

const schema = z.object({
    id: z.number(),
    name: z.string().nonempty("Vui lòng nhập họ tên"),
    email: z.string().regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Vui lòng nhập đúng định dạng @"),
    password: z.string().nonempty("Vui lòng nhập mật khẩu"),
    phone: z.string().regex(/^[0-9]+$/, "Vui lòng nhập số"),
    birthday: z.string().nonempty("Vui lòng nhập ngày sinh"),
    gender: z.boolean().optional().refine((val) => val !== undefined, {
        message: "Vui lòng chọn giới tính",
    }),
    role: z.string().nonempty("Vui lòng chọn cấp bậc"),
});


const schemaAdd = schema;
const schemaEdit = schema.extend({
    password: z.string().optional(),
})

type AuthPopupForms = z.infer<typeof schema>;

export default function AuthPopup({ mode }: AuthPopupProps) {
    const { idUser } = useUserManagementStore();
    const resolverSchema = mode === "add" ? schemaAdd : schemaEdit;

    const [openDate, setOpenDate] = useState(false)
    const { register,
        handleSubmit,
        watch,
        setValue,
        control,
        reset,
        formState: { errors },
    } = useForm<AuthPopupForms>({
        defaultValues: {
            id: 0,
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: undefined,
            role: '',
        },
        resolver: zodResolver(resolverSchema as typeof schema)
    })

    // API
    const { data: dataDetailUser, isLoading: isLoadingDetailUser } = useDetailUser(idUser);
    const { mutate: mutateAdd, isPending: isPendingAdd } = useAddUser();
    const { mutate: mutateUpdate, isPending: isPendingUpdate } = useUpdateUser();

    // GetUserId
    useEffect(() => {
        if (!idUser || !dataDetailUser) return;
        reset({
            id: dataDetailUser?.id,
            name: dataDetailUser?.name,
            email: dataDetailUser?.email,
            phone: dataDetailUser?.phone,
            birthday: dataDetailUser?.birthday,
            gender: dataDetailUser?.gender,
            role: dataDetailUser?.role,
        })

    }, [idUser, dataDetailUser, reset]);

    const onSubmit = (data: AuthPopupForms) => {
        if (dataDetailUser?.id) {
            mutateUpdate({
                id: dataDetailUser.id,
                data: data as UserPostResponse,
            });
        } else {
            mutateAdd(data as UserPostResponse, {
                onSuccess: () => {
                    reset({
                        id: 0,
                        name: '',
                        email: '',
                        password: '',
                        phone: '',
                        birthday: '',
                        gender: undefined,
                        role: '',
                    })
                }
            })
        }
    }

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <Input className="h-10" id="email" placeholder="Nhập email @gmail.com" {...register("email")} />
                            {errors.email?.message && <p className="text-red-300 text-xs">{errors.email?.message}</p>}
                        </div>
                        {mode === "add" && <div className="grid gap-2">
                            <Label htmlFor="password"><SquareAsterisk size={18} className="text-blue-300" />Mật khẩu</Label>
                            <Input className="h-10" id="password" placeholder="Nhập mật khẩu" {...register("password")} />
                            {errors.password?.message && <p className="text-red-300 text-xs">{errors.password?.message}</p>}
                        </div>}
                        <div className="grid gap-2">
                            <Label htmlFor="name"><User size={20} className="text-yellow-400" />Họ tên</Label>
                            <Input className="h-10" id="name" placeholder="Nhập họ tên" {...register("name")} />
                            {errors.name?.message && <p className="text-red-300 text-xs">{errors.name.message}</p>}
                        </div>
                        {/* <div className="grid gap-4 row-span-3">
                            <div className="block space-y-2">
                                <Label htmlFor="picture"><Image size={18} className="text-green-400" />Avatar</Label>
                                <div className="relative flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-51 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <img src={previewImage(avatar)} className="w-full max-h-full object-contain" alt="" />
                                        <input id="dropzone-file" type="file" accept='.png,jpeg,.jpg' className="hidden"
                                        // onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                                        //     const file = e.currentTarget.files?.[0];
                                        //     setValue("avatar", file);
                                        // }} 
                                        />
                                    </label>
                                    <X
                                        // onClick={() => {
                                        //     setValue("avatar", "")
                                        // }}
                                        className="absolute z-2 top-1 right-1 cursor-pointer hover:text-red-400 transition-all duration-300" />
                                </div>
                            </div>
                        </div> */}
                        <div className="grid gap-2">
                            <Label htmlFor="phone"><Phone size={18} className="text-green-400" />Số điện thoại</Label>
                            <Input className="h-10" id="phone" placeholder="Nhập số điện thoại" {...register("phone")} />
                            {errors.phone?.message && <p className="text-red-300 text-xs">{errors.phone?.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="gender"><VenusAndMars size={19} className="text-pink-300" />Giới tính</Label>
                            <Controller
                                name="gender"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={(val) => field.onChange(val === "nam")}
                                        value={field.value === undefined ? undefined
                                            : field.value ? "nam" : "nu"}
                                    >
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
                                )}
                            />
                            {errors.gender?.message && <p className="text-red-300 text-xs">{errors.gender?.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="birthday" className="px-1">
                                <CalendarDays size={20} className="text-indigo-400" />
                                Ngày sinh
                            </Label>
                            <Controller
                                name="birthday"
                                control={control}
                                render={({ field }) => (
                                    <Popover open={openDate} onOpenChange={setOpenDate}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="date"
                                                className="w-full justify-between font-normal h-10"
                                            >
                                                {field.value ? new Date(field.value).toLocaleDateString("en-GB") : "Chọn ngày"}
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                captionLayout="dropdown"
                                                selected={field.value ? new Date(field.value) : undefined}
                                                onSelect={(date) => {
                                                    field.onChange(date?.toISOString())
                                                    setOpenDate(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                )}
                            />
                            {errors.birthday?.message && <p className="text-red-300 text-xs">{errors.birthday?.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="role"><CircleUser size={20} className="text-orange-300" />Cấp bậc</Label>
                            <Controller
                                name="role"
                                control={control}
                                defaultValue="USER"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full min-h-10">
                                            <SelectValue placeholder="Chọn cấp bậc" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="USER">user</SelectItem>
                                                <SelectItem value="ADMIN">admin</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.role?.message && <p className="text-red-300 text-xs">{errors.role?.message}</p>}
                        </div>
                    </div>
                </div>
                <DialogFooter className="p-5 pt-0">
                    <DialogClose asChild>
                        <Button variant="outline">Đóng</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-sky-300 transition-all duration-300 cursor-pointer">
                        {isPendingAdd || isPendingUpdate && <LoaderCircle className="animate-spin" />}
                        {mode === "add" ? "Thêm" : "Cập nhật"}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
