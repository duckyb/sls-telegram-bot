import { MyContext } from '../types';

/**
 * Handler for the /start command
 * This is the first command users typically send when starting a conversation with the bot
 */
export const handleStart = async (ctx: MyContext): Promise<void> => {
    await ctx.reply(ctx.t('start'), { parse_mode: 'Markdown' });
};
