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
