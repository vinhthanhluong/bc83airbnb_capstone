import Header from '@/pages/AdminTemplate/_components/Header'
import Sidebar from '@/pages/AdminTemplate/_components/Sidebar'
import { useAuthStore } from '@/store/auth.store';
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminLayout() {
    // const { user } = useAuthStore();
    // if (user) {
    //     return <Navigate to={user?.user.role === 'USER' ? '/' : '/dashboard'} />
    // }
    return (
        <div>
            <Header />
            <div className='block'>
                <div className='fixed top-0 left-0 w-70 bg-gradient-to-r from-sky-300 to-blue-300'>
                    <Sidebar />
                </div>
                <div className='w-full pl-70'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
