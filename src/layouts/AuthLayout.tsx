import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  )
}
