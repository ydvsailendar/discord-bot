"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client();
const PREFIX = "$";
client.on("ready", () => {
    var _a;
    console.log(` ${(_a = client.user) === null || _a === void 0 ? void 0 : _a.username} bot is online`);
});
client.on("message", (message) => {
    var _a;
    if (message.author.bot)
        return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        if (CMD_NAME === "kick") {
            if (args.length === 0) {
                return message.reply("Please provide an ID");
            }
            const member = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.members.cache.get(args[0]);
            console.log(member);
            if (member) {
                member.kick();
            }
            message.channel.send("That member was not found");
        }
        else if (CMD_NAME === "ban") {
            message.channel.send("Banned the user");
        }
    }
});
client.login(process.env.BOT_TOKEN);
//# sourceMappingURL=server.js.map