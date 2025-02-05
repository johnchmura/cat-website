import { removeCat } from "../../../firebase/firebase";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { catId } = req.body;
    
    if (!catId) {
      return res.status(400).json({ error: "Missing cat ID" });
    }

    await removeCat(catId);
    res.status(200).json({ message: "Cat removed successfully" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(401).json({ error: error.message });
  }
}