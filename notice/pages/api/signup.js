import { connectDB } from "@/util/database";

export default async function signup(req, res) {
    if (req.method == "POST") {
        async function isUsernameTaken() {
            const { ID, PW } = req.body;
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection("post").findOne({ ID: ID });
            return result !== null;
        }

        if (!isUsernameTaken()) {
            const { ID, PW } = req.body;
            if (ID == "") {
                return res.status(500).json("ID를 입력해주세요");
            }
            if (PW == "") {
                return res.status(500).json("PW를 입력해주세요");
            }
            const db = (await connectDB).db("forum");
            db.collection("post").insertOne({ ID: ID, PW: PW });
            return res.status(200).json("good")
        }else{
            res.status(200).json("not good")
        }
    }
}
