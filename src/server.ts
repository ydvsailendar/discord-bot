import { config } from "dotenv";
config();
import { Client, Message } from "discord.js";

const client = new Client();

const PREFIX: string = "$";

client.on("ready", () => {
  console.log(` ${client.user?.username} bot is online`);
});

client.on("message", (message: Message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === "kick") {
      if (args.length === 0) {
        return message.reply("Please provide an ID");
      }
      const member = message.guild?.members.cache.get(args[0]);
      console.log(member);
      if (member) {
        member.kick();
      }
      message.channel.send("That member was not found");
    } else if (CMD_NAME === "ban") {
      message.channel.send("Banned the user");
    }
  }
});

client.login(process.env.BOT_TOKEN);
