import { ClawApp, ClawModel } from "openclaw";

const app = new ClawApp({
  name: process.env.BOT_NAME || "ClawDBot",
  models: [
    new ClawModel({
      provider: "anthropic",
      model: process.env.MODEL,
      apiKey: process.env.ANTHROPIC_API_KEY
    })
  ]
});

app.listen(process.env.PORT || 3000);

console.log("ClawDBot running on port", process.env.PORT || 3000);
