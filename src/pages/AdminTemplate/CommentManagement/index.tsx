import { useParams } from "react-router-dom";
import CommentItemDetail from "./CommentItemDetail";
import { useListOfRoomComment } from "@/hooks/useCommentQuery";
import type { CommentItem } from "@/interface/comment.interface";

export default function CommentManagement() {
    // Param
    let { roomID } = useParams();

    // API
    const { data: dataComment } = useListOfRoomComment(Number(roomID));
   
    return (
        <>
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5 lg:mb-8">Bình luận của Phòng {roomID}</h2>
            </div>
            <div className="border border-[#eee] rounded-lg shadow-sm w-full p-5 bg-gray-50/20 2xl:p-8">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 2xl:grid-cols-4 sp376:grid-cols-2 2xl:gap-5">
                    {dataComment && dataComment?.map((item: CommentItem) => <CommentItemDetail key={item.id} data={item} />)}

                </div>
            </div>
        </>
    )
}
