import { House } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styled from "styled-components";

const MENU_DASHBOARD = [
    { id: 0, icon: <House />, text: 'Bảng điều khiển' },
    { id: 1, icon: <House />, text: 'Quản lí người dùng' },
    { id: 2, icon: <House />, text: 'Quản lí vị trí' },
    { id: 3, icon: <House />, text: 'Quản lí tin phòng' },
    { id: 4, icon: <House />, text: 'Quản lí đặt phòng' },
    { id: 5, icon: <House />, text: 'Quản lí bình luận' }
]


export default function Sidebar() {
    const itemMenuRef = useRef<HTMLDivElement>(null);
    const itemMenuRef = useRef<HTMLDivElement>(null);
    const effRef = useRef<HTMLDivElement>(null);

    const [itemMenuHeight, setItemMenuHeight] = useState<number | null>(null);
    const [transformY, setTransformY] = useState<number>(0);
    const [zxc, setZxc] = useState<number>(0);

    const SidebarEff = styled.div`
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 999px 0 0 999px;
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        z-index:-1;
        transition: transform .3s ease;
        &::before{
            content: "";
            position: absolute;
            top: -20px;
            right: 0;
            width: 20px;
            height: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 6px 6px 0 5px #fff;
            background-color: transparent;
            z-index: -1;
            pointer-events: none;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: -20px;
            right: 0;
            width: 20px;
            height: 20px;
            border-top-right-radius: 20px;
            box-shadow: 6px -6px 0 5px #fff;
            background-color: transparent;
            z-index: -1;
            pointer-events: none;
        }
    `;

    useEffect(() => {
        if (itemMenuRef.current) {
            setItemMenuHeight(itemMenuRef.current.clientHeight)
        }
    }, []);

    const handleEff = (id: number) => {
        if (itemMenuHeight) {
            setTransformY(itemMenuHeight * id)
        }
    }

    return (
        <div className="block h-screen mt-30 pl-3">
            {/* logo */}
            <div className="block relative z-0">
                <SidebarEff ref={effRef} style={{ transform: `translateY(${itemMenuHeight && itemMenuHeight * zxc}px)`, height: `${itemMenuHeight}px` }}>
                    <span className="block bg-pink-200 size-12 rounded-full ml-1" />
                </SidebarEff>
                {
                    MENU_DASHBOARD.map((item) => {
                        const isActive = '';
                        return (<div key={item.id} className={isActive} ref={itemMenuRef} onClick={() => setZxc(item.id)}>
                            <p className='flex items-center gap-3 text-white pl-1 py-1 cursor-pointer'>
                                <span className="size-12 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className="font-medium text-lg">{item.text}</span>
                            </p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
