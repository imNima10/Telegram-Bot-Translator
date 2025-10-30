let redis = require("./../db/redis")
let translate = require("./../utils/translate")
let keyboards = require("./../keyboards")

exports.startMenu = (bot, chatId) => {
    bot.sendMessage(chatId, "به ربات ترجمه خوش اومدی!", keyboards.startKeyboard)
}

exports.homeMenu = (bot, chatId, messageId = null) => {
    let action = redis.get(`user:${chatId}:action`)
    let lan = redis.get(`user:${chatId}:lan`)
    if (action) redis.del(`user:${chatId}:action`)
    if (lan) redis.del(`user:${chatId}:lan`)

    if (messageId === null) {
        bot.sendMessage(chatId, "لطفا سرویس خود را انتخاب کنید!", keyboards.homeKeyboard)
    } else {
        bot.editMessageText("لطفا سرویس خود را انتخاب کنید!", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: keyboards.homeKeyboard.reply_markup
        })
    }
}

exports.sendTranslateKeyboard = (bot, chatId, messageId, command) => {
    redis.set(`user:${chatId}:action`, command, "EX", 180)

    bot.editMessageText("حالا زبانت رو انتخاب کن!", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: keyboards.lanKeyboard.reply_markup
    })
}

exports.sendLanguage = (bot, chatId, messageId, command) => {
    redis.set(`user:${chatId}:lan`, command, "EX", 180)

    bot.editMessageText("حالا متنی که میخوای ترجمه بشه رو ارسال کن: ", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: keyboards.backKeyboard.reply_markup
    })
}

exports.handleMessage = async (bot, msg) => {
    let chatId = msg.chat.id
    let text = msg.text
    let action = await redis.get(`user:${chatId}:action`)
    let lan = await redis.get(`user:${chatId}:lan`)

    if (text.startsWith('/')) {
        if (!/\/start/.test(text)) return this.homeMenu(bot, chatId);
        return;
    }

    if (action && lan) {
        let response = await translate(text, lan, action)
        if (response?.error) {
            return bot.sendMessage(chatId, `!! خطا در ترجمه !!`, keyboards.backKeyboard)
        }
        bot.sendMessage(chatId, response, keyboards.backKeyboard)
    } else {
        this.homeMenu(bot, chatId)
    }
}