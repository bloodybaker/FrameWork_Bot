const Telegraf = require('telegraf')
const bot = new Telegraf('1310659659:AAF_LaxsnmeSDbYkNUBNygmPiM4hir7YUy8')
messageArray = [];
bot.start((ctx) => {
    ctx.reply("Добро пожаловать. Вы авторизованы как: " + ctx.from.first_name + " " + ctx.from.last_name);
    return ctx.reply("Напишите /info для получения информации");
    console.log(ctx.from.id)
})
bot.command("/getid",ctx => {
    ctx.reply(ctx.chat.id);
})
bot.on("message",async (ctx) => {
    if(ctx.message.text.split(" ")[0] === "/add"){
        messageArray = ctx.message.text.split(" ");
        if(ctx.chat.id === -1001452231462){
            bot.telegram.sendMessage(-421004495,"Внимание. Занятие запланировано на " + messageArray[1] +".\nСсылка на занятие: " + messageArray[2] + "\nЖелаем удачи!");
            messageArray.clear;
            console.log(messageArray.toString())
    }else {
            ctx.reply("Вы не являетесь администратором.");
        }
    }
})
bot.startPolling();