import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            {result.map((item, idx) => (
                <div className="list-item" key={result[idx]._id}>
                    <Link href={`/detail/${item._id}`}>
                        <h4>{result[idx].title}</h4>
                    </Link>
                    <DetailLink/>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}
