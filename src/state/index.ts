// src/state/index.ts

import * as authState from './auth';
import * as userState from './user';

export const state = {
  auth: authState,
  user: userState,
};
