import {proxy, useSnapshot} from 'valtio';

export const state = proxy<{user: null | {id: string; name: string}}>({
  user: null,
});

export function useUser() {
  const snapshot = useSnapshot(state);
  return snapshot.user;
}
// src/state/user/index.ts
export function updateUser(user: {id: string; name: string}) {
  state.user = user;
  console.log('state.user', state.user);
}
