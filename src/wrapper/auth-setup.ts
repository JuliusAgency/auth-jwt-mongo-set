import { AuthMngrOPtions, setupAuthManager } from '@juliusagency/base-user-mngr';
import { initStrategies, StrategyOptions } from '@juliusagency/auth-strategies';
import { BaseUser, dBApi, Token } from '@juliusagency/base-user-mongo';
import { AuthJwtOptions, setupAuthMiddleware } from '@juliusagency/auth-jwt';

// Reexport from the packages
export { BaseUser, AuthJwtOptions };

export type AuthJwtSetSetupOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  User: any;
  authOpt: AuthJwtOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emailer?: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authSetSetup = (config: AuthJwtSetSetupOptions) => {
  // Wrap up the User
  const user = dBApi(config.User);
  const token = dBApi(Token);

  const strategyOptions: StrategyOptions = {
    dBApi: user,
  };

  const strategy = initStrategies(strategyOptions);

  config.User = user;
  // Auth middleware setup
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { authMiddleware, encodeToken } = setupAuthMiddleware(config.authOpt);

  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
    encode: encodeToken,
    session: false,
    Token: token,
    emailer: config.emailer,
  };

  const authRouter = setupAuthManager(authMngrOPtions);

  return { authRouter, authMiddleware };
};
