import Header from '@/pages/AdminTemplate/_components/Header'
import Sidebar from '@/pages/AdminTemplate/_components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <div>
            <Header />
            <div className='flex'>
                <div className='w-4/12'>
                    <Sidebar />
                </div>
                <div className='w-8/12'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
