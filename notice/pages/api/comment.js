import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method == "POST") {
        let session = await getServerSession(req, res, authOptions);
        const { comment, params } = JSON.parse(req.body);

        if (comment) {
            const db = (await connectDB).db("forum");
            db.collection("comments").insertOne({
                author: session.user.email,
                comment,
                parent: params.id,
            });
        }else{
            return res.status(500).json('댓글을 입력해주세요')
        }
    }
}
