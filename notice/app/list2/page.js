import { connectDB } from "@/util/database";

import Listitem from "./Listitem";

export const dynamic = 'force-dynamic'

export const revalidate = 20;

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    result = result.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    return (
        <div className="list-bg">
            <Listitem result={result} />
        </div>
    );
}
