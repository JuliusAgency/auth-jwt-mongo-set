## Set of packages for Authentication with Session and Mongo Db

The auth-jwt-mongo-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<p>
  <a href="https://www.npmjs.com/package/@juliusagency/auth-jwt-mongo-set" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/auth-jwt-mongo-set.svg">
  </a>
  <a href="https://github.com/JuliusAgency/auth-jwt-mongo-set#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-jwt-mongo-set/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-jwt-mongo-set/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install --save @juliusagency/auth-jwt-mongo-set
```

### Pre-conditions:
```
``

### Usage  
```
import {
  AuthJwtOptions,
  AuthJwtSetSetupOptions,
  BaseUser,
  authSetSetup,
} from '@juliusagency/auth-jwt-mongo-set';

  const app: Express = express();

  // Setup Auth with session and MongoDb
  const authJwtOptions: AuthJwtOptions = {
    secretKey: configApp.authJwt.secretKey,
    lifeTime: configApp.authJwt.lifeTime,
  };

  const config: AuthJwtSetSetupOptions = {
    // repository: '',
    User: BaseUser,
    authOpt: authJwtOptions,
  };

  const { authMiddleware, authRouter } = authSetSetup(config);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
```
