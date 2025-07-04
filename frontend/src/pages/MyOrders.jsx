import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyOrders.css';
export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/user/orders', {
      headers: { 'Authorization': token }
    })
      .then(res => res.json())
      .then(setOrders);
  }, []);

  // Helper to group items by name and count quantity
  const groupItems = (items) => {
    const map = {};
    items.forEach(item => {
      if (map[item._id]) {
        map[item._id].qty += 1;
      } else {
        map[item._id] = { ...item, qty: 1 };
      }
    });
    return Object.values(map);
  };

  // Group orders by restaurant and status
  const groupedOrders = [];
  const seen = new Set();
  orders.forEach(order => {
    const key = `${order.restaurant._id}-${order.status}`;
    if (!seen.has(key)) {
      // Find all orders with same restaurant and status
      const sameGroup = orders.filter(o => o.restaurant._id === order.restaurant._id && o.status === order.status);
      // Merge items
      let allItems = [];
      sameGroup.forEach(o => { allItems = allItems.concat(o.items); });
      groupedOrders.push({
        _id: key,
        restaurant: order.restaurant,
        status: order.status,
        items: allItems
      });
      seen.add(key);
    }
  });

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">SAVORA</div>
        <div className="navbar-links">
          <Link to="/user/restaurants">Restaurants</Link>
          <Link to="/user/orders">My Orders</Link>
          <Link to="/">Home</Link>
        </div>
      </nav>
      <div className="myorders-list">
        <h2>My Orders</h2>
        <ul className="list">
          {groupedOrders.map(order => (
            <li key={order._id} className="order-card">
              <h3>Restaurant: {order.restaurant.name}</h3>
              <div>
                <span>Items:</span>
                <ul>
                  {groupItems(order.items).map(item => (
                    <li key={item._id}>
                      {item.name} x {item.qty}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-status">Status: {order.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
