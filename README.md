# Serverless Telegram Bot Template

A modern serverless Telegram bot template using Grammy, TypeScript, and AWS Lambda.

## Features

- Built with [Grammy](https://grammy.dev/) - a modern Telegram Bot API framework
- TypeScript for type safety and better developer experience
- Serverless deployment with AWS Lambda
- Internationalization support with [@grammyjs/i18n](https://github.com/grammyjs/i18n)
- Organized command structure
- Local development with hot reloading

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- Yarn package manager
- AWS account (for deployment)
- Telegram Bot Token (get one from [@BotFather](https://t.me/BotFather))

### Installation

1. Clone this repository:

    ```
    git clone https://github.com/duckyb/sls-telegram-bot.git
    cd sls-telegram-bot
    ```

2. Install dependencies:

    ```
    yarn install
    ```

3. Configure your bot:
    - Edit `configuration.ts` and add your bot tokens
    - Update `serverless.yml` with your AWS settings if needed

### Development

Run the bot locally:

```
yarn start
```

This will start the bot in development mode with hot reloading.

### Deployment

1. Deploy to AWS Lambda:

    ```
    yarn deploy
    ```

2. After deployment, you'll get an endpoint URL. Copy this URL and update it in your `configuration.ts` file.

3. Set the webhook:
    ```
    yarn setHook
    ```

### Commands

The template comes with a few example commands:

- `/start` - Welcome message
- `/help` - Show help information

## Adding New Commands

1. Create a new handler in the `commands` directory:

```typescript
// commands/mycommand.ts
import { MyContext } from '../types';

export const handleMyCommand = async (ctx: MyContext): Promise<void> => {
    await ctx.reply('This is my new command!');
};
```

2. Export it in `commands/index.ts`:

```typescript
// Export your command handler
export { handleMyCommand } from './mycommand';
```

3. Register it in `bot.ts`:

```typescript
// Import your command handler
import { handleMyCommand } from './commands';

// Add this with other command handlers
bot.command('mycommand', handleMyCommand);
```

4. Add it to the help message in `locales/en.ftl`

## Customization

- Modify the `locales/en.ftl` file to customize bot messages
- Add more languages by creating additional `.ftl` files in the `locales` directory
- Extend the `types.ts` file to add custom context types

## Troubleshooting

### Webhook Issues

If the webhook isn't working:

1. Ensure the endpoint URL in `configuration.ts` is correct
2. Check AWS Lambda permissions
3. Run `yarn delHook` followed by `yarn setHook` to reset the webhook

### Type Errors

The project uses strict TypeScript settings. When adding new features:

1. Ensure proper typing for all variables and functions
2. Extend the `MyContext` type in `types.ts` if adding new context properties

### AWS Lambda Deployment

If deployment fails:

1. Verify AWS credentials are set up correctly
2. Check the `serverless.yml` configuration
3. Ensure all dependencies are properly installed

## License

MIT
