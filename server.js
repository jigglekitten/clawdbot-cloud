import { OpenCLAW } from "openclaw";

const bot = new OpenCLAW({
  model: process.env.MODEL,
  anthropicKey: process.env.ANTHROPIC_API_KEY,
  name: process.env.BOT_NAME || "ClawDBot"
});

bot.start(3000);
console.log("ClawDBot running on port 3000");
