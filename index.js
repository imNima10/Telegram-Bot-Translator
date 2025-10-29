let bot = require("./bot")
let actions = require("./actions")

bot.onText(/\/start/, (msg) => actions.startMenu(bot, msg.chat.id))