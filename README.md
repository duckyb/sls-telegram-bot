# Serverless Telegram Bot (NodeJS)

A serverless node telegram bot boilerplate, using **nodeJS** on **Amazon AWS Lambda**

## Before starting

Clone the repository, then run `npm install` and `sls config`, to install the dependencies and configure your AWS account

## Commands

- `npm run dev` Runs the bot in polling mode with the dev configuration.
- `npm run deploy` Publish the bot on AWS using serverless-cli and prod configuration.
- `npm run setHook` Set the webHook using the prod configuration.
- `npm run delHook` Delete the webHook using the prod configuration.
