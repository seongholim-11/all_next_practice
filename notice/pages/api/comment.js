import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { comment, params } = JSON.parse(req.body);
        let session = await getServerSession(req, res, authOptions);

        if (comment) {
            const db = (await connectDB).db("forum");
            db.collection("comments").insertOne({
                author: session.user.email,
                comment,
                parent: new ObjectId(params.id),
            });
            return res.status(200).json("저장 완료");
        } else {
            return res.status(500).json("댓글을 입력해주세요");
        }
    } else if (req.method == "GET") {
        const id = req.query.id;
        const db = (await connectDB).db("forum");
        const result = await db
            .collection("comments")
            .find({ parent: new ObjectId(id) })
            .toArray();
        return res.status(200).json(result);
    }
}
