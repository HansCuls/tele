const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

const group = require('./commands/group');
const yt = require('./commands/download');
const sticker = require('./commands/sticker');
const quiz = require('./commands/quiz');
const donate = require('./commands/donate');
const check = require('./commands/check');
const kidnap = require('./commands/kidnap');
const broadcast = require('./commands/broadcast');
const premium = require('./commands/premium');
const maintenance = require('./commands/maintenance');
const monitor = require('./commands/monitor');
const tiktok = require('./commands/tiktok')
const ig = requaire('./commands/ig')

// Load semua fitur
[group, download, sticker, quiz, donate, check, kidnap, broadcast, premium, maintenance, monitor]
    .forEach(cmd => cmd(bot));

// Start Message
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
🔹 *Menu Bot* 🔹
1. /group - Kelola grup
2. /yt [link] - Download YouTube (Premium)
3. /tiktok [link] - Download TikTok (Premium)
4. /ig [link] - Download Instagram (Premium)
5. /sticker - Buat stiker
6. /quiz - Soal matematika
7. /donate - Donasi
8. /check - Cek ID/member grup
9. /kidnap [group_id] - Culik member (Premium)
10. /broadcast - Kirim pesan ke user/grup (Admin)
11. /buyprem - Beli premium
12. /addprem - Tambah user premium
13. /buysc atau /script - Beli file terenkripsi
14. /status - Cek status bot
`, { parse_mode: 'Markdown' });
});
