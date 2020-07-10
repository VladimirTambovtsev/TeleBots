const Telegraf = require('telegraf')

const bot = new Telegraf('1333571130:AAHlfYrrvxsWFwGDckPsuHIZMRanET0wwkc')

const helpMessage = `
/start - start the bot
/help - command reference
`

// built-in commands
bot.start(ctx => {
  ctx.reply(`Hi, ${ctx.from.first_name}! I'm Echo Bot`)
  ctx.reply(helpMessage)
})

bot.help(ctx => ctx.reply(helpMessage))

bot.command('echo', ctx => {
  let input = ctx.message.text
  let inputArr = input.split(' ')
})

bot.launch()
