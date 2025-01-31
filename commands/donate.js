module.exports = (bot) => {
    bot.onText(/\/donate/, (msg) => {
        bot.sendMessage(msg.chat.id, `
💰 *Donasi untuk mendukung bot ini* 💰
- QRIS: [Klik Disini](https://imgbb.com/qris)
- Dana: 08123456789
- Ovo: 08123456789
- Gopay: 08123456789
`, { parse_mode: "Markdown" });
    });
};
