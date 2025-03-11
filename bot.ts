import { Bot } from 'grammy';
import { I18n } from '@grammyjs/i18n';
import { AWSLambdaEvent, AWSLambdaResponse, BotMode, MyContext, isBotMode } from './types';
import configuration from './configuration';
import { handleStart, handleHelp } from './commands';

/*--------------------
|  B O T   C O N F   |
--------------------*/

// Choose the bot token based on the environment
const arg: string = process.argv.slice(2)[0];
const mode: BotMode = isBotMode(arg) ? arg : BotMode.Production;
const BOT_TOKEN = configuration[mode].token;

// Initialize i18n
const i18n = new I18n<MyContext>({
    defaultLocale: 'en',
    directory: 'locales', // Load all translation files from locales directory
});

// Create bot instance with context type
const bot = new Bot<MyContext>(BOT_TOKEN);
bot.use(i18n.middleware());

// Set up AWS Lambda handler for production mode
export const handler = async (event: AWSLambdaEvent): Promise<AWSLambdaResponse> => {
    if (mode === BotMode.Development) {
        return { statusCode: 200, body: 'Bot is running in development mode' };
    }

    // Process the update
    const body = JSON.parse(event.body);
    await bot.handleUpdate(body);

    // Return a response to acknowledge receipt of the event
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};

/*--------------------
|  H A N D L E R S   |
--------------------*/

// Register command handlers
bot.command('start', handleStart);
bot.command('help', handleHelp);

// Handle text messages
bot.on('message:text', async (ctx) => {
    // Simple echo functionality as an example
    await ctx.reply(`You said: ${ctx.message.text}`);
});

/*--------------------
|  R U N   B O T     |
--------------------*/

// Start the bot in development mode
if (mode === BotMode.Development) {
    console.log('Running in development mode...');
    bot.start();
}
