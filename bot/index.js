let telegramBot = require("node-telegram-bot-api")

let token = process.env.TELEGRAM_BOT_TOKEN

let bot = new telegramBot(token, { polling: true })

module.exports = bot