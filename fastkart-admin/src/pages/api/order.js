import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { orderId } = req.query;

      if (!orderId) {
        return res.status(400).json({
          success: false,
          message: "Order ID is required to fetch the order details.",
        });
      }

      // Use the clientPromise to get the MongoDB client
      const client = await clientPromise;
      const db = client.db("Shisha");
      const ordersCollection = db.collection("orders");

      // Fetch the order by its orderId
      const order = await ordersCollection.findOne({ orderId: orderId });

      if (!order) {
        return res.status(404).json({
          success: false,
          message: "Order not found with the provided ID.",
        });
      }

      // Map through cartItems to construct full URLs for thumbnails
      const BASE_URL = "https://www.holster-uae.com"; // Replace with the actual base URL of your website
      order.cartItems = order.cartItems.map((item) => ({
        ...item,
        thumbnail: item.thumbnail.startsWith("/")
          ? `${BASE_URL}${item.thumbnail}` // Prepend base URL if the path is relative
          : item.thumbnail, // Keep as is if it's already a full URL
      }));

      // Return the order details with updated thumbnails
      res.status(200).json({ success: true, order: order });
    } catch (error) {
      console.error("Error fetching order:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch the order.",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
