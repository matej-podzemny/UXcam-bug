const { getSecret } = require('./fetchSecret');
const { writeFileSync } = require('fs');
const dotenv = require('dotenv');

const SECRETS = {
  MOBILE_APP: [  'API_URL', 'WEBSITE_URL', 'FCM_SENDER_ID', 'SENTRY_DSN', 'ENV_NAME']
};

function validateSecret(secret, [name, variables]) {
  const rows = secret.split('\n');
  variables.forEach(variable => {
    const found = rows.find(row => row.startsWith(variable));
    if (!found) {
      throw new Error(`Secret ${name} is missing variable ${variable}`);
    }

    if (!found.split('=')[1] && !found.split('=')[1].length) {
      throw new Error(`Secret ${name} variable ${variable} is empty`);
    }
  });
}

async function storeSecrets() {
  const foundSecrets = await Promise.all(
    Object.entries(SECRETS).map(async secret => {
      const fetched = await getSecret(secret[0]);

      validateSecret(fetched, secret);

      return '#' + secret[0] + '\n' + fetched;
    })
  );

  writeFileSync('./.env', foundSecrets.join('\n'));
}

function parseToJSON() {
  const result = dotenv.config();
  writeFileSync('./env.json', JSON.stringify(result.parsed || {}));
}

storeSecrets(SECRETS)
  .then(() => {
    parseToJSON();
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
