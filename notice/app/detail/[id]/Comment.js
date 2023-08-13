"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Comment() {
    const [comment, setComment] = useState("")
    const params = useParams()
    return (
        <div>
            <div>댓글 목록</div>
            <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
                console.log("🚀 ~ file: Comment.js:15 ~ Comment ~ comment:", comment)
                fetch('/api/comment', {
                    method: 'POST',
                    body: JSON.stringify({comment, params})
                })
                setComment('')
            }}>댓글 전송</button>
        </div>
    );
}
