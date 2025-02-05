import { adjustCat } from "../../../firebase/firebase";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { catId, image, name, description, price } = req.body;

    // Validate required fields
    if (!catId) {
      return res.status(400).json({ error: "Missing cat ID" });
    }

    // Create an object with only the fields that are provided
    const updatedData = {};
    if (image) updatedData.image = image;
    if (name) updatedData.name = name;
    if (description) updatedData.description = description;
    if (price) updatedData.price = price;

    // Check if at least one field is provided
    if (Object.keys(updatedData).length === 0) {
      return res.status(400).json({ error: "No fields to update" });
    }

    // Adjust the cat details
    await adjustCat(catId, updatedData);
    res.status(200).json({ message: "Cat details adjusted successfully" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(401).json({ error: error.message });
  }
}