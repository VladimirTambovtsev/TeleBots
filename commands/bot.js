const Telegraf = require('telegraf')

const bot = new Telegraf('1333571130:AAHlfYrrvxsWFwGDckPsuHIZMRanET0wwkc')

// built-in commands
bot.start(ctx =>
  ctx.reply(`Hi, ${ctx.from.first_name}! You have entered a start command`)
)
bot.help(ctx => ctx.reply('You have entered the help command'))
bot.settings(ctx => ctx.reply('You have entered the settings command'))

// custom command, ex: /test replies with Hello world
bot.command('test', ctx => ctx.reply('Hello world'))

// if word is the message, ex: cat replies with Meow
bot.hears('cat', ctx => ctx.reply('Meow'))

// check content message
bot.on('sticker', ctx => ctx.reply('This is a sticker'))
// bot.on('text', ctx => ctx.reply('This is a text'))

// handles username
bot.mention('botfather', ctx => ctx.reply('mention method'))

// handles phone number
bot.phone('+1 730 263-4233', ctx => ctx.reply('phone method'))

// handles hashtag: '#some_word'
bot.hashtag('hash', ctx => ctx.reply('hashtag method'))

bot.launch()
