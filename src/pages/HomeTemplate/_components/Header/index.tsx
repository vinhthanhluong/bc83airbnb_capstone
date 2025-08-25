import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/store/auth.store';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { clearUser } = useAuthStore();
  const navigate = useNavigate()
  const handleLogout = () => {
    clearUser();
    navigate('/auth/login')
  }
  return (
    <div>
      Header Home
      <Button onClick={handleLogout}>Đăng xuất</Button>
    </div>
  )
}
