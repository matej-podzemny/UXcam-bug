const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const project = process.env.CLOUDSDK_CORE_PROJECT;

if (!project) {
  throw new Error('Env Variable CLOUDSDK_CORE_PROJECT has no value');
}

// Instantiates a client
const client = new SecretManagerServiceClient();

async function getSecret(name) {
  console.log(project);
  const [secret] = await client.accessSecretVersion({
    name: `projects/${project}/secrets/${name}/versions/latest`,
  });

  if (!secret) {
    throw new Error(`Secret ${name} not found`);
  }

  return secret.payload.data.toString();
}

module.exports = {
  getSecret,
};
