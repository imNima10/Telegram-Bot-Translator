let bot = require("./bot")
let actions = require("./actions")

bot.onText(/\/start/, (msg) => actions.startMenu(bot, msg.chat.id))

bot.on('callback_query', (query) => {
    let command = query.data;
    let chatId = query.message.chat.id;
    let messageId = query.message.message_id;
    if (command === 'home') actions.homeMenu(bot, chatId, messageId)
})
bot.on("polling_error", (err) => console.log(err.message));