module.exports = (bot) => {
    bot.on("message", async (msg) => {
        if (msg.photo || msg.video || msg.text) {
            bot.sendSticker(msg.chat.id, msg.photo ? msg.photo[msg.photo.length - 1].file_id : msg.video ? msg.video.file_id : msg.text);
        }
    });
};
