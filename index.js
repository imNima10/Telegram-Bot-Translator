let bot = require("./bot")
let actions = require("./actions")

bot.onText(/\/start/, (msg) => actions.startMenu(bot, msg.chat.id))

bot.on('callback_query', (query) => {
    let command = query.data;
    let chatId = query.message.chat.id;
    let messageId = query.message.message_id;

    let theActions=["google","microsoft","yandex"]
    
    if (command === 'home') actions.homeMenu(bot, chatId, messageId)

    theActions.includes(command) ? actions.sendTranslateKeyboard(bot,chatId,messageId,command) : null
})
bot.on("polling_error", (err) => console.log(err.message));