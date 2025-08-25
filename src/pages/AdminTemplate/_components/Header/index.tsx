import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth.store'

export default function Header() {
  const { clearUser } = useAuthStore();
  const navigate = useNavigate()
  const handleLogout = () => {
    clearUser();
    navigate('/auth/login')
  }
  return (
    <div className='fixed top-0 inset-x-0 h-20 shadow-2xs flex justify-between items-center px-5'>
      <div className='logo'>
        <p className='text-4xl font-bold'>LaniBnB</p>
      </div>

      <div className='avatar relative'>
        <div className='flex items-center gap-3'>
          <img className="w-10 h-10 rounded-full cursor-pointer" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="User dropdown" />
          <div className='font-medium'>Bonnie Green</div>
        </div>
        <div className="absolute top-[120%] overflow-hidden right-0 z-10 bg-white divide-y divide-gray-200 rounded-md shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul className="text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Thông tin</a>
            </li>
          </ul>
          <p onClick={handleLogout} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Đăng xuất</p>
        </div>
      </div>
    </div>
  )
}
