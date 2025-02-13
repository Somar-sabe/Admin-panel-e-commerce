"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as XLSX from "xlsx"; // Import xlsx

const AllUsersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) {
          throw new Error("Failed to fetch contacts");
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

  const exportToExcel = () => {
    // Prepare the table data for export
    const tableData = orders.map((order) => ({
      Name: order.name,
      Date: new Date(order.createdAt).toLocaleDateString(),
      Phone: order.phone,
      Email: order.email,
      Company: order.company,
      Position: order.position,
      Country: order.country,
      Message: order.message,
    }));

    // Create a new workbook
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contacts");

    // Export the workbook to Excel file
    XLSX.writeFile(wb, "contacts.xlsx");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contacts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          {/* Export Button */}
          <button
            onClick={exportToExcel}
            style={{
              marginBottom: "20px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Export to Excel
          </button>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
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
                      <th scope="row">{order.name}</th>
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
                    <td colSpan="8">No Contacts found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsersTable;
