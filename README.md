## Vorto React Device Dashboard

### Installation
```bash
cd vorto_dashboard
npm install
```

### Setup
1. Create BoschID account
1. Subscribe to Suite for Asset Communication (Beta)
1. Go to profile -> OAuth2 Clients
1. Create new client (Check the Things checkbox)
1. Copy Client ID, Client secret, scope into the config file.
1. Create Things in the console
1. For each device, add an Entry at the policies tab with type "suite-auth" and the subject ID from ... Grant READ access.
1. ...
