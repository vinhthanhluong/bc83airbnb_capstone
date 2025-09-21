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
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddLocation, useAddLocationImages, useDetailLocation, useListProvince, useUpdateLocation } from "@/hooks/useLocationQuery"
import type { DistrictsItem, LocationItem, ProvinceItem } from "@/interface/location.interface"
import { locationManagementStore } from "@/store/locationManagement.store"
import { Building2, Earth, Image, MapPin, MapPinned, X } from "lucide-react"
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form"

interface LocationPopupProps {
    mode: "add" | "edit",
}

export function LocationPopup({ mode }: LocationPopupProps) {
    // Store
    const { idLocation, selectedProvinceCode, setSelectedProvinceCode } = locationManagementStore()

    // API
    const { data: dataDetail, isLoading: isLoadingDetail } = useDetailLocation(idLocation);
    const { mutate: mutateAdd, isPending: isPendingAdd } = useAddLocation();
    const { mutate: mutateAddImage, isPending: isPendingAddImage } = useAddLocationImages();
    const { mutate: mutateUpdate, isPending: isPendingUpdate } = useUpdateLocation();
    const { data: dataListProvince } = useListProvince('lv2');

    const selectedProvince = dataListProvince?.find((p) => p.name === (selectedProvinceCode));

    const { register, handleSubmit, watch, setValue, reset, control, formState: { errors } } = useForm<LocationItem>({
        defaultValues: {
            tenViTri: "",
            tinhThanh: "",
            quocGia: "",
            hinhAnh: ""
        }
    })

    useEffect(() => {
        reset({
            tenViTri: dataDetail?.tenViTri,
            tinhThanh: dataDetail?.tinhThanh,
            quocGia: dataDetail?.quocGia,
            hinhAnh: dataDetail?.hinhAnh
        })
    }, [idLocation, dataDetail, reset]);

    const previewImg = watch('hinhAnh');
    const previewImgLink = (file: any) => {
        if (file instanceof Blob || file instanceof File) {
            const link = URL.createObjectURL(file);
            return link;
        }
        return file;
    }
    const onSubmit = (data: LocationItem) => {
        const formData = new FormData();
        formData.append('formFile', data['hinhAnh'])
        if (dataDetail?.id) {
            mutateUpdate({
                id: dataDetail.id,
                data: { ...data, hinhAnh: typeof data.hinhAnh === 'string' ? data.hinhAnh : "" }
            }, {
                onSuccess: () => {
                    reset({
                        tenViTri: "",
                        tinhThanh: "",
                        quocGia: "",
                        hinhAnh: ""
                    })
                }
            })
            if (typeof data.hinhAnh !== 'string') {
                mutateAddImage({
                    id: dataDetail.id,
                    data: formData
                })
            }
        } else {
            mutateAdd(data, {
                onSuccess: () => {
                    reset({
                        tenViTri: "",
                        tinhThanh: "",
                        quocGia: "",
                        hinhAnh: ""
                    })
                }
            })
        }
    }

    return (
        <DialogContent className="sm:w-[calc(100%-2rem)] sm:max-w-[800px] p-0 gap-0">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader className="border-b border-gray-200 p-3 sm:p-5">
                    <DialogTitle className="flex items-center gap-4"><MapPinned className="bg-pink-500 text-white size-10 p-2.5 sm:size-13 sm:p-3 rounded-md" />
                        {mode === "add" ? "Thêm vị trí" : "Sửa vị trí"}
                    </DialogTitle>
                </DialogHeader>
                <div className="overflow-auto mb-5 sm:mb-2">
                    <div className="grid sm:grid-cols-2 gap-4 p-5 max-h-[400px]">
                        <div className="grid gap-4 row-span-3">
                            <div className="block space-y-2">
                                <Label htmlFor="picture"><Image size={18} className="text-green-400" />Hình ảnh</Label>
                                <div className="relative flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-51 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        {!previewImg && <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>}

                                        {previewImg && <img src={previewImgLink(previewImg)} className="w-full max-h-full object-contain" alt="" />}
                                        <input id="dropzone-file" type="file" accept='.png,jpeg,.jpg' className="hidden"
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const file: any = e.target.files?.[0];
                                                if (!file) return;
                                                setValue('hinhAnh', file)
                                            }} />
                                    </label>
                                    {previewImg && <X
                                        onClick={() => setValue('hinhAnh', '')}
                                        className="absolute z-2 top-3 right-3 cursor-pointer hover:text-red-400 transition-all duration-300" />}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="tinhThanh"><Building2 size={18} className="text-blue-300" />Tỉnh thành</Label>
                            {/* <Input className="h-10" id="city" placeholder="Nhập tỉnh thành" {...register('tinhThanh')} /> */}
                            <Controller
                                name="tinhThanh"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        onValueChange={(val) => {
                                            field.onChange(val)
                                            setSelectedProvinceCode(val)
                                        }}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Chọn tỉnh thành" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {dataListProvince?.map((item: ProvinceItem) => (
                                                    <SelectItem key={item.code} value={item.name}>{item.name}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="tenViTri"><MapPin size={18} className="text-red-300" />Tên vị trí</Label>
                            {/* <Input className="h-10" id="name" placeholder="Nhập tên vị trí" {...register('tenViTri')} /> */}
                            <Controller
                                name="tenViTri"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="h-10 w-full">
                                            <SelectValue placeholder="Chọn vị trí" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {selectedProvince?.districts?.map((item: DistrictsItem) => (
                                                    <SelectItem key={item.code} value={item.name}>{item.name}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>


                        <div className="grid gap-2">
                            <Label htmlFor="country"><Earth size={20} className="text-yellow-400" />Quốc gia</Label>
                            <Input className="h-10" id="country" placeholder="Nhập quốc gia" {...register('quocGia')} />
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
