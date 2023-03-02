import React from 'react';
import "@styles/myOrder.scss";

const MyOrder = () => {
  return (
    <div className="container-fluid">
        <section className="container">
            <h1 className="tittle">My order</h1>
            <div className="my-order">
                <p>
                    <span>04-12-2022</span>
                    <span>6 articles</span>
                </p>
                <p>$560,00</p>
            </div>
            <div className="shopping-card">
                <figure>
                    <img src="@images/boh.jpeg" alt="boh" />
                </figure>
                <p>Boh</p>
                <p>$120,00</p>
            </div>
        </section>
    </div>
  )
}

export default MyOrder