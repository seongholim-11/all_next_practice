import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        const id = req.body;

        // MongoDB의 ObjectId 형식인지 확인해야 합니다. ObjectId 형식이 아닐 경우 수정이 제대로 이루어지지 않을 수 있습니다
        const idObject = new ObjectId(id);
        const db = (await connectDB).db("forum");
        // updateOne({수정할 게시물 정보}, {$set: {수정할 내용}})
        await db.collection("post").deleteOne({ _id: idObject });
        return res.status(200).json('삭제완료')
    }
}
