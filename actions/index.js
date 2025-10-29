let redis = require("./../db/redis")

exports.startMenu = (bot, chatId) => {
    let inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'شروع کن', callback_data: 'home' }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, "به ربات ترجمه خوش اومدی!", inlineKeyboard)
}

exports.homeMenu = (bot, chatId, messageId) => {
    let inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Google 🇺🇸', callback_data: 'google' },
                    { text: 'Microsoft 🇺🇸', callback_data: 'microsoft' },
                    { text: 'Yandex 🇷🇺', callback_data: 'yandex' }
                ]
            ]
        }
    };

    bot.editMessageText("لطفا سرویس خود را انتخاب کنید!", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: inlineKeyboard.reply_markup
    })
}

exports.sendTranslateKeyboard = (bot, chatId, messageId, command) => {
    redis.set(`user:${chatId}:action`, command, "EX", 180)

    let inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'انگلیسی', callback_data: 'en' },
                ],
                [
                    { text: 'عربی', callback_data: 'ar' },
                    { text: 'فارسی', callback_data: 'fa' }
                ],
                [
                    { text: 'بازگشت به منو اصلی', callback_data: 'home' }
                ]
            ]
        }
    }
    
    bot.editMessageText("حالا زبانت رو انتخاب کن!", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: inlineKeyboard.reply_markup
    })
}

exports.sendLanguage = (bot, chatId, messageId, command) => {
    redis.set(`user:${chatId}:lan`, command, "EX", 180)

    let inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'بازگشت به منو اصلی', callback_data: 'home' }
                ]
            ]
        }
    }
    
    bot.editMessageText("حالا متنی که میخوای ترجمه بشه رو ارسال کن: ", {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: inlineKeyboard.reply_markup
    })
}