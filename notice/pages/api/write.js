import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const {title, content} = req.body
        const client = await connectDB;
        const db = client.db("forum");
        db.collection("post").insertOne({title: title, content: content})
        return res.status(200).json(req.body);
    }
}
