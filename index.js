const mode = process.argv.slice(2)[0] || 'prod' // 'dev' || 'prod'
const TelegramBot = require("node-telegram-bot-api");
const { configuration } = require('./config.js');
const config = configuration[mode]; // dynamically load config
const bot = new TelegramBot(config.token, { polling: mode === 'dev' });

/**
 * MESSAGE HANDLER
 */
handleMessage = message => {
  // Your code here!
  if (message.text) {
    // Echos the received message
    bot.sendMessage(message.chat.id, `Message received! You said:\n"${message.text}"`);
  }
}

/**
 * EVENT HANDLERS
 */
if (bot.options.polling) { 
  // Polling event handlers
  bot.on('message', message => { handleMessage(message) });
}
exports.handler = (event, context, callback) => {
  // Responding "200 - OK" to telegram servers
  callback(null, {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': true },
    body: JSON.stringify({ ok: true }),
  });
  // Extracting message from JSON
  const { body } = event;
  handleMessage(JSON.parse(body).message);
}
