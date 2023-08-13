import { connectDB } from "@/util/database";

import Listitem from "./Listitem";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    return (
        <div className="list-bg">
            <Listitem result={result}/>
        </div>
    );
}
