export default async function handler(req, res) {
    if (req.method == "GET") {
        let today = new Date();

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1; // 월
        let date = today.getDate(); // 날짜

        let hours = today.getHours(); // 시
        let minutes = today.getMinutes(); // 분
        let seconds = today.getSeconds(); // 초

        let nowday = `${year} / ${month} / ${date}`;
        let nowtime = `${hours} : ${minutes} : ${seconds}`;

        return res.status(200).json({nowday, nowtime});
    }
}
