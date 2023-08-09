"use client";

import { useState } from "react";

export default function List() {
    let products = ["Tomatoes", "Pasta", "Coconut"];
    const [count, setCount] = useState([0, 0, 0]);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((product, idx) => {
                return (
                    <div className="food" key={idx}>
                        <img
                            src={`/food${idx}.png`}
                            alt="토마토"
                            className="food-img"
                        />
                        <h4>{product} $40</h4>
                        <span> {count[idx]} </span>
                        <button
                            onClick={() => {
                                let copy = [...count]
                                copy[idx]++
                                setCount(copy);
                            }}
                        >
                            +
                        </button>
                        <button
                            onClick={() => {
                                let copy = [...count]
                                copy[idx]--
                                setCount(copy);
                            }}
                        >
                            -
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
