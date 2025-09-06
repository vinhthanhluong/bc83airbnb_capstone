import { useParams } from "react-router-dom";
import CommentItemDetail from "./CommentItemDetail";

export default function CommentManagement() {
    // Param
    let { roomID } = useParams();
    console.log("🌲 ~ AuthManagement ~ roomID:", roomID)
    return (
        <>
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Quản lý bình luận của Phòng 1</h2>
            </div>
            <div className="border border-[#eee] rounded-lg shadow-sm w-full p-5 bg-gray-50/20 2xl:p-8">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 2xl:grid-cols-4 sp376:grid-cols-2 2xl:gap-5">
                    <CommentItemDetail />
                    <CommentItemDetail />
                    <CommentItemDetail />
                    <CommentItemDetail />
                    <CommentItemDetail />
                </div>
            </div>
        </>
    )
}
