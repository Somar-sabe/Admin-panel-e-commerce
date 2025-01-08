import clientPromise from "@/lib/mongodb"; // Assuming you're using MongoDB

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { title, thumbnail, pCate, cate, price, productType, shortDes, description, addInfo } = req.body;

      // Ensure required fields are present
      if (!title || !thumbnail || !pCate || !cate || !price || !productType) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }

      // Get MongoDB client
      const client = await clientPromise;
      const db = client.db("Shisha");
      const productsCollection = db.collection("products");

      // Save the product to MongoDB
      const result = await productsCollection.insertOne({
        title,
        thumbnail,
        pCate,
        cate,
        price,
        productType,
        shortDes,
        description,
        addInfo,
        createdAt: new Date(),
      });

      // Return the inserted product with insertedId
      res.status(201).json({
        success: true,
        message: "Product added successfully!",
        product: {
          ...req.body, // Send the product details back
          _id: result.insertedId, // Attach the MongoDB document ID
        },
      });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ success: false, message: "Failed to add product", error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
