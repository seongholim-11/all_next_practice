export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((product, idx) => {
                return (
                    <div class="food" key={idx}>
                        <img src={`/food${idx}.png`} alt="토마토" className="food-img" />
                        <h4>{product} $40</h4>
                    </div>
                );
            })}
        </div>
    );
}
