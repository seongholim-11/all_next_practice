import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { id, title, content } = req.body;

        // MongoDB의 ObjectId 형식인지 확인해야 합니다. ObjectId 형식이 아닐 경우 수정이 제대로 이루어지지 않을 수 있습니다
        const idObject = new ObjectId(id);

        if (!title) {
            return res.status(400).json("제목을 입력해주세요");
        }

        if (!content) {
            return res.status(400).json("내용을 입력해주세요");
        }

        const db = (await connectDB).db("forum");
        // updateOne({수정할 게시물 정보}, {$set: {수정할 내용}})
        await db
            .collection("post")
            .updateOne(
                { _id: idObject },
                { $set: { title: title, content: content } }
            );
        return res.redirect(302, "/list");
    }
}
