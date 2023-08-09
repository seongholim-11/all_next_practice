import hi from "./data";

export default function Cart() {
    let cart = ["Tomatoes", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem cart={cart[0]} />
            <CartItem cart={cart[1]} />
            <CartItem cart={cart[2]} />
            <Banner title="현대" />
            <Banner title="롯데" />
            <Banner title="삼성" />
            <Button color="blue"/>
        </div>
    );
}
function Button(props){
  return <button style={{background: `${props.color}`}}>버튼</button>
}

function Banner(props) {
    return <h5>{props.title}카드 결제 행사중</h5>;
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.cart}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
