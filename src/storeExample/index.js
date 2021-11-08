import { createCustomStore, createSelector } from "../state-manager";

const initialState = {
  count: 0,
  usersList: [],
  user: null
};

export const store = createCustomStore(initialState);
export const useStoreSelector = createSelector(store);

export const incCount = () => {
  store.count = store.count + 1;
};
export const setUsersList = (userLists) => {
  store.usersList = userLists;
};

export const setUser = (id) => {
  const selectedUser = store.usersList.find((user) => user.id === id);
  return (store.user = selectedUser);
};
