"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const OrderView = ({ params: { orderId } }) => { // Directly destructuring orderId
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId) {
      setError("Invalid order ID");
      setLoading(false);
      return;
    }

    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(`/api/order?orderId=${orderId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch order details");
        }
        const data = await res.json();
        if (data.success) {
          setOrderDetails(data.order);
        } else {
          throw new Error(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!orderDetails) return <div>No order found</div>;

  return (
    <div>
      <h1>Order ID: {orderDetails.orderId}</h1>
      <p>
        <strong>Customer Name:</strong> {orderDetails.customerName}
      </p>
      <p>
        <strong>Email:</strong> {orderDetails.customerEmail}
      </p>
      <p>
        <strong>Phone:</strong> {orderDetails.phone}
      </p>
      <p>
        <strong>Order Date:</strong> {new Date(orderDetails.createdAt).toLocaleString()}
     
      </p>
      <p>
        <strong>Total Amount:</strong> {orderDetails.totalAmount} AED
      </p>
      <p>
        <strong>Payment Method:</strong> {orderDetails.paymentMethod}
      </p>

      <h2>Cart Items:</h2>
      <ul>
        {Array.isArray(orderDetails.cartItems) && orderDetails.cartItems.length > 0 ? (
          orderDetails.cartItems.map((item) => (
            <li key={item.id || item.title}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={50}
                height={50}
              />
              <p>
                <strong>Title:</strong> {item.title}
              </p>
              <p>
                <strong>Price:</strong> {item.price} AED
              </p>
              <p>
                <strong>Quantity:</strong> {item.cartQuantity}
              </p>
            </li>
          ))
        ) : (
          <p>No cart items available.</p>
        )}
      </ul>
    </div>
  );
};

export default OrderView;
