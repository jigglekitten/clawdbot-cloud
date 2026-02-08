import { ClawServer, ClawAgent } from "openclaw";

const agent = new ClawAgent({
  name: process.env.BOT_NAME || "ClawDBot",
  model: process.env.MODEL,
  anthropicKey: process.env.ANTHROPIC_API_KEY
});

const server = new ClawServer({
  port: process.env.PORT || 3000,
  agents: [agent]
});

server.start();
console.log("ClawDBot running on port", process.env.PORT || 3000);
