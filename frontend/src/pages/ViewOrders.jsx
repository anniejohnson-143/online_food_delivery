import React, { useEffect, useState } from 'react';
import './ViewOrders.css';
export default function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/restaurant', {
      headers: { 'Authorization': token }
    })
      .then(res => res.json())
      .then(setRestaurants);
  }, []);

  useEffect(() => {
    if (!restaurantId) return;
    const token = localStorage.getItem('token');
    fetch(`http://localhost:5000/api/restaurant/${restaurantId}/orders`, {
      headers: { 'Authorization': token }
    })
      .then(res => res.json())
      .then(setOrders);
  }, [restaurantId]);

  return (
    <div className="vieworders-list">
      <h2>View Orders</h2>
      <select value={restaurantId} onChange={e => setRestaurantId(e.target.value)}>
        <option value="">Select Restaurant</option>
        {restaurants.map(r => (
          <option key={r._id} value={r._id}>{r.name}</option>
        ))}
      </select>
      <ul className="list">
        {orders.map(order => {
          // Group items by _id and count quantity
          const itemMap = {};
          order.items.forEach(item => {
            if (itemMap[item._id]) {
              itemMap[item._id].qty += 1;
            } else {
              itemMap[item._id] = { ...item, qty: 1 };
            }
          });
          const groupedItems = Object.values(itemMap);
          return (
            <li key={order._id} className="vieworders-card">
              <h3>User: {order.user.name}</h3>
              <p>Items:</p>
              <ul>
                {groupedItems.map(item => (
                  <li key={item._id}>{item.name} x {item.qty}</li>
                ))}
              </ul>
              <p>Order Time: {new Date(order.orderTime).toLocaleString()}</p>
              <p>Status: {order.status}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
} 