export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                <input type="text" name="title" />
                <input type="text" name="content" />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
