# Project Overview for AI Assistants

This template provides a foundation for building Telegram bots using modern practices:

### Key Components

1. **Bot Framework**: Uses Grammy.js, a modern framework for Telegram Bot API
2. **Language**: Fully TypeScript-based for type safety and better developer experience
3. **Deployment**: Configured for AWS Lambda using the Serverless Framework
4. **Webhook Handling**: Custom implementation for AWS Lambda
5. **Internationalization**: Support for multiple languages using @grammyjs/i18n
6. **Command Structure**: Modular organization in the `commands` directory

### Important Files

- `bot.ts`: Main bot logic and AWS Lambda handler
- `configuration.ts`: Environment configuration (tokens, endpoints)
- `types.ts`: TypeScript type definitions
- `commands/`: Directory containing command handlers
- `serverless.yml`: Serverless Framework configuration
- `hooks/`: Scripts for webhook management

### Implementation Details

- **AWS Lambda Handler**: The bot uses a custom handler that processes webhook updates from Telegram
- **Command Pattern**: Commands are organized in separate files for better maintainability
- **Context Types**: Extended context types for type safety with i18n support

## Project Structure

```
.
├── bot.ts                # Main bot file with AWS Lambda handler
├── commands/             # Command handlers
│   ├── index.ts          # Exports all commands
│   └── example.ts        # Example command implementation
├── configuration.ts      # Bot configuration (tokens, endpoints)
├── hooks/                # Webhook setup scripts
│   ├── setWebhook.ts     # Set webhook script
│   └── deleteWebhook.ts  # Delete webhook script
├── locales/              # Translation files (.ftl format)
├── serverless.yml        # Serverless configuration
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
└── types.ts              # TypeScript types
```
