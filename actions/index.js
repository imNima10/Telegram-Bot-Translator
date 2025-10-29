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

exports.homeMenu = (bot, chatId,messageId) => {
    let inlineKeyboard = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Google 🇺🇸', callback_data: 'Google' },
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