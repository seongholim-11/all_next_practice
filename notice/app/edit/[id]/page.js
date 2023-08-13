import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function page(props) {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div className="p-20">
            <h4>글수정</h4>
            <form action="/api/edit" method="POST">
                <input type="hidden" name="id" value={props.params.id} />
                <input
                    type="text"
                    name="title"
                    placeholder="글 제목"
                    defaultValue={result.title}
                />
                <input
                    type="text"
                    name="content"
                    placeholder="글 내용"
                    defaultValue={result.content}
                />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
