import { MyContext } from '../types';

/**
 * Handler for the /help command
 * Provides information about available commands and how to use the bot
 */
export const handleHelp = async (ctx: MyContext): Promise<void> => {
    await ctx.reply(ctx.t('help'), { parse_mode: 'Markdown' });
};
