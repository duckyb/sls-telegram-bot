const mode = process.argv.slice(2)[0] || 'prod' // 'dev' || 'prod'
const TelegramBot = require("node-telegram-bot-api");
const { configuration } = require('./config.js');
const config = configuration[mode]; // dynamically load config
const bot = new TelegramBot(config.token, { polling: mode === 'dev' });
// check configuration
if (config.token === 'YOUR_TOKEN') {
  throw new Error('You must first setup your bot tokens in config.js!')
}

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
exports.handler = async (event) => {
  // Extracting message from JSON
  const { body } = event;
  const { message } = JSON.parse(body);

  await handleMessage(message);

  // Responding "200 - OK" to telegram servers
  return { statusCode: 200, body: JSON.stringify({ ok: true }) }
}
