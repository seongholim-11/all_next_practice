"use client";
import Link from "next/link";
export default function Listitem({ result }) {
    /*     useEffect(()=>{
        // 서버에 부탁해서 DB게시물 가져옴
        // html 먼저 가져오고 서버에서 가져옴
    }) */

    return (
        <div>
            {result.map((item, idx) => (
                <div className="list-item" key={result[idx]._id}>
                    <Link href={`/detail/${item._id}`}>
                        <h4>{result[idx].title}</h4>
                    </Link>
                    <Link href={`/edit/${item._id}`}>🖌</Link>
                    <p>1월 1일</p>
                    <span onClick={(e)=>{
                        /* fetch('/api/delete', {
                            method: 'DELETE',
                            // JSON.stringify([1,2,3])
                            body: item._id
                        }).then((r)=>{
                            if(r.status == 200) {
                              return r.json()
                            } else {
                              //서버가 에러코드전송시 실행할코드
                            }
                          })
                          .then((result)=>{ 
                            //성공시 실행할코드
                            e.target.parentElement.style.opacity = 0
                            setTimeout(()=> {
                                e.target.parentElement.style.display = 'none'
                            },1000)
                          }).catch((error)=>{
                            //인터넷문제 등으로 실패시 실행할코드
                            console.log(error)
                          }) */
                        //   fetch('/api/test?데이터이름=값')
                          fetch(`/api/delete?id=${item._id}`)
                    }}>🪣</span>
                </div>
            ))}
        </div>
    );
}
