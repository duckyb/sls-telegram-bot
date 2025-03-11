import { I18nFlavor } from '@grammyjs/i18n';
import { Context } from 'grammy';

export enum BotMode {
    Development = 'development',
    Production = 'production',
}

export function isBotMode(value: string): value is BotMode {
    return Object.values(BotMode).includes(value as BotMode);
}

export type MyContext = Context & I18nFlavor;

// You can extend this interface to include your own session data
export interface SessionData {
    // Example session data structure
    userData: {
        [userId: string]: {
            name: string;
            preferences: string[];
        };
    };
    lastUpdated: string;
}

// Define AWS Lambda event and context types
export interface AWSLambdaEvent {
    body: string;
    [key: string]: unknown;
}

export interface AWSLambdaResponse {
    statusCode: number;
    body: string;
}
