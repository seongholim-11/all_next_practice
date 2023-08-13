export default function handler(req, res) {
    console.log("안녕")
    return res.status(200).json("처리완료");
}
