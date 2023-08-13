export default function handler(req, res) {
        console.log("🚀 ~ file: test.js:4 ~ handler ~ req.query:", req.query)
        return res.status(200).json("처리완료");
}
