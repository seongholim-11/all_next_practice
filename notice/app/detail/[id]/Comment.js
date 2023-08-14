"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Comment() {
    const [comment, setComment] = useState("")
    const [allComment, setAllComment] = useState([])
    const params = useParams()

    useEffect(() => {
        // GET 요청을 처리하는 함수
        const fetchComments = async () => {
            try {
                const response = await fetch(`/api/comment?id=${params.id}`);
                const data = await response.json();
                setAllComment(data)
            } catch (error) {
                console.error("댓글 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        // 컴포넌트가 마운트될 때 GET 요청 실행
        fetchComments();
    }, [params.id]);

    return (
        <div>
            <div>
                {
                    allComment.map((item, idx)=>(
                        <div key={item._id}>
                            <p>{item.author}</p>
                            <p>{item.comment}</p>
                        </div>
                    ))
                }
            </div>
            <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
                fetch('/api/comment', {
                    method: 'POST',
                    body: JSON.stringify({comment, params})
                })
                setComment('')
            }}>댓글 전송</button>
        </div>
    );
}
