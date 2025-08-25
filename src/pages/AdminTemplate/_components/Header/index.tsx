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
    <div>
      Header Dashboard
      <Button onClick={handleLogout}>Đăng xuất</Button>
    </div>
  )
}
