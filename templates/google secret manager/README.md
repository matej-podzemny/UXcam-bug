
## Google secret manager setup

1. `npm install --save-dev @google-cloud/secret-manager dotenv fs`
2. package.json script: `"config:download:dev": "CLOUDSDK_CORE_PROJECT=<project_name> node scripts/downloadEnv.js"`
3. go to `downloadEnv.js` and set names of variables that you want to export in `SECRETS`  
