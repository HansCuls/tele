const questions = {
    easy: ["2+2?", "5+3?"],
    normal: ["12*3?", "15-8?"],
    hard: ["25/5?", "50+21-30?"],
    veryHard: ["sqrt(144)?", "9*9-10?"]
};

module.exports = (bot) => {
    bot.onText(/\/quiz (\w+)/, (msg, match) => {
        let level = match[1].toLowerCase();
        if (!questions[level]) return bot.sendMessage(msg.chat.id, "❌ Level tidak valid. Pilih: easy, normal, hard, veryHard");

        let question = questions[level][Math.floor(Math.random() * questions[level].length)];
        bot.sendMessage(msg.chat.id, `🔢 ${question}`);
    });
};
