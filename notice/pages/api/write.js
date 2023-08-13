import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    if (session) {
        if (req.method == "POST") {
            req.body.author = session.user.email
            const { title, content, author} = req.body;
            if (title == "") {
                return res.status(500).json("제목을 입력해주세요");
            }
            if (content == "") {
                return res.status(500).json("내용을 입력해주세요");
            }
            const db = (await connectDB).db("forum");
            db.collection("post").insertOne({ title, content, author });
            return res.redirect(302, "/list");
        }
    }
}
