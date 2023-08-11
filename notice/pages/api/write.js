import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { title, content } = req.body;
        if (title == "") {
            return res.status(500).json("제목을 입력해주세요");
        }
        if (content == "") {
            return res.status(500).json("내용을 입력해주세요");
        }
        const db = (await connectDB).db("forum");
        db.collection("post").insertOne({ title: title, content: content });
        return res.redirect(302, "/list");
    }
}
