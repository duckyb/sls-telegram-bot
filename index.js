/**
 * Serverless bot on AWS Lambda
 * Webhook: https://api.telegram.org/bot<your-token>/setWebhook?url=<your-endpoint-url>
 */

const TelegramBot = require('node-telegram-bot-api');
const token = '<your-bot-token>'
const bot = new TelegramBot(token, { polling: false });

/** Webhook handler. Main entry point of the service */
exports.handler = (event, context, callback) => {
  
  /** Responding "200 - OK" to telegram servers to avoid webhook spam */
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      ok: true
    }),
  };
  callback(null, response);

  /** Message handling */
  const { body } = event;
  const { message: msg } = JSON.parse(body);
  if (msg.text) {
    bot.sendMessage(msg.chat.id, `Message received! You said: ${msg.text}`) // Echo the message
  }

}
