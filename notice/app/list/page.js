import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            {result.map((item, idx) => (
                <Link href={`/detail/${item._id}`}>
                    <div className="list-item" key={result[idx]._id}>
                        <h4>{result[idx].title}</h4>
                        <p>{result[idx].content}</p>
                        <p>1월 1일</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
