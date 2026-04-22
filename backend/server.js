import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// chatbot route
app.post("/chat", (req, res) => {
  const { message } = req.body;

  const replies = {
    hello: "Hi 👋 I'm AI assistant!",
    hi: "Hey! How can I help you today?",
    project: "You can contact to company for project discussion 💼",
  };

  const key = message?.toLowerCase();

  res.json({
    reply: replies[key] || "I'm Fiza's portfolio assistant 🤖 Ask me anything!"
  });
});

// test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});