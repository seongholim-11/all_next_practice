export default function page() {
  return (
    <div>
        <form action="/api/signup" method="POST">
            <input type="text" name="ID" placeholder="ID 입력해주세요"/>
            <input type="text" name="PW" placeholder="PW 입력해주세요"/>
            <button type="submit">가입</button>
        </form>
    </div>
  )
}
