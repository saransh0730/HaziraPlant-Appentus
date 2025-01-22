import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import "../styles/Orders.css";

function Orders() {
  const orders = [
    { id: 1, title: "Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu.", isNew: true },
    { id: 2, title: "Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu.", isNew: true },
    { id: 3, title: "Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu.", isNew: true },
    { id: 4, title: "Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu.", isNew: true },
    { id: 5, title: "Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu.", isNew: true },
  ];

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>Orders and Circulars</h2>
        <a href="#all-orders" className="see-all-link">
          See All Orders and Circulars →
        </a>
      </div>
      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <div className="order-icon">
              <AiFillFilePdf size={40} color="#9e1b1e" />
            </div>
            <div className="order-content">
              <p>{order.title}</p>
              {order.isNew && <span className="new-badge">New</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
