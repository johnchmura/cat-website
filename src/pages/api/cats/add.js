import { addCat } from "../../../firebase/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image, name, description, price } = req.body;
    
    if (!image || !name || !description || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const catId = await addCat({ image, name, description, price });
    res.status(200).json({ id: catId, message: "Cat added successfully" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(401).json({ error: error.message });
  }
}