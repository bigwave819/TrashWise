import Classification from "../model/classfication.model.js"; 

// Create a new classification record
export async function createClassification(req, res) {
  try {
    const { userId, imageUrl, materialType, biodegradable, confidence, pointsEarned } = req.body;

    // Basic validation
    if (!userId || !imageUrl || !materialType || biodegradable === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const classification = new Classification({
      userId,
      imageUrl,
      materialType,
      biodegradable,
    });

    await classification.save();

    return res.status(201).json({ message: "Classification saved successfully", classification });
  } catch (error) {
    console.error("Error saving classification:", error);
    return res.status(500).json({ message: "Server error" });
  }
}

// Get all classifications for a specific user
export async function getUserClassifications(req, res) {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const classifications = await Classification.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json(classifications);
  } catch (error) {
    console.error("Error fetching classifications:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
