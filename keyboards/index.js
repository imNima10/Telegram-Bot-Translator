exports.startKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'شروع کن', callback_data: 'home' }
            ]
        ]
    }
}
exports.homeKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'Google 🇺🇸', callback_data: 'google' },
                { text: 'Microsoft 🇺🇸', callback_data: 'microsoft' },
                { text: 'Yandex 🇷🇺', callback_data: 'yandex' }
            ]
        ]
    }
}
exports.lanKeyboard = {
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
exports.backKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'بازگشت به منو اصلی', callback_data: 'home' }
            ]
        ]
    }
}