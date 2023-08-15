"use client";
import { useState } from "react";

export default function Write() {
    let [src, setSrc] = useState('')

    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <input type="text" name="title" placeholder="글 제목" />
                <input type="text" name="content" placeholder="글 내용" />
                <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                        const file = e.target.files[0];
                        const filename = encodeURIComponent(file.name);

                        let res = await fetch(`/api/image?file=${filename}`);
                        res = await res.json();

                        //S3 업로드
                        const formData = new FormData();
                        Object.entries({ ...res.fields, file }).forEach(
                            ([key, value]) => {
                                formData.append(key, value);
                            }
                        );
                        let upload = await fetch(res.url, {
                            method: "POST",
                            body: formData,
                        });
                        console.log(upload);

                        if (upload.ok) {
                            setSrc(upload.url + "/" + filename);
                        } else {
                            console.log("실패");
                        }
                    }}
                />
                <img src={src} alt="img" />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
