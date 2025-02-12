"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await res.json();
        if (data.success) {
          const sortedOrders = data.orders.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setOrders(sortedOrders);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">Created at</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Company</th>
                <th scope="col">Position</th>
                <th scope="col">Country</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <th scope="row">#{order.name}</th>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>{order.phone}</td>
                    <td>{order.email}</td>
                    <td>{order.company}</td>
                    <td>{order.position}</td>
                    <td>{order.country}</td>
                    <td>{order.message}</td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
