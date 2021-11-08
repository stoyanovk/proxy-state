import { useReducer, useEffect } from "react";

const subscribeAll = (store, values, callback) => {
  const unsubscribes = [];
  for (let key in values) {
    const unsubscribe = store.on(key, callback);
    unsubscribes.push(unsubscribe);
  }
  return unsubscribes;
};

export const useStoreSelector = (store, selector) => {
  const values = selector(store);
  const [, forceUpdate] = useReducer((c) => c + 1, 0);
  useEffect(() => {
    const unsibscribeCallbacks = subscribeAll(store, values, () =>
      forceUpdate()
    );
    return () => {
      unsibscribeCallbacks.forEach((callback) => callback());
    };
  }, []);
  return values;
};
