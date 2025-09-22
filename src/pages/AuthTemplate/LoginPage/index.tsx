import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod";
import { useNavigate } from "react-router-dom";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoginForm } from "@/hooks/useAuthQuery";
import { useAuthStore } from "@/store/auth.store";

const schema = z.object({
    email: z.string().nonempty('Email không được để trống').regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Vui lòng nhập đúng định dạng @"),
    password: z.string().nonempty('Mật khẩu không được để trống')
});

type LoginInput = z.infer<typeof schema>

export default function LoginPage() {
    const { user, setUser } = useAuthStore();
    const navigate = useNavigate();

    const { mutate: handleLogin } = useLoginForm();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: LoginInput) => {
        handleLogin(data, {
            onSuccess: (currentUser) => {
                setUser(currentUser);
                navigate(user?.user.role === 'USER' ? '/' : '/dashboard')
            }
        })
    }

    return (
        <div className='w-70 mx-auto'>
            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Tài khoản</label>
                    <Input placeholder='Nhập Email' {...register("email")} />
                    {errors.email?.message && <p className="text-red-400">{errors.email?.message}</p>}
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <Input placeholder='Nhập Mật khẩu' {...register("password")} />
                    {errors.password?.message && <p className="text-red-400">{errors.password?.message}</p>}
                </div>
                <Button>Đăng nhập</Button>
            </form>
        </div>
    )
}
