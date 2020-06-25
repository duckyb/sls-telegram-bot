/**
 * "dev" and "prod" environment configurations
 */
module.exports.configuration = {
  dev: {
    token: 'YOUR_TOKEN'
  },
  prod: {
    token: 'YOUR_TOKEN',
    endpoint: 'www.example.com' // URL from serverless-cli
  }
}
