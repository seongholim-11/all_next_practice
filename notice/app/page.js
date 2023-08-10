import { connectDB } from "@/util/database";

export default async function Home() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    console.log("🚀 ~ file: page.js:7 ~ Home ~ result:", result)
    return <div>안녕</div>;
}
