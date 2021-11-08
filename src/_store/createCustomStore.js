const generateHash = () => {
  return parseInt(Math.random() * 10000000, 10).toString(16);
};

export const createCustomStore = (obj) => {
  const listeners = {};

  const subscribe = (field, cb) => {
    const key = generateHash();
    if (listeners[field]) {
      listeners[field][key] = cb;
    } else {
      listeners[field] = { [key]: cb };
    }
    return () => delete listeners[field][key];
  };

  const proxy = new Proxy(obj, {
    get: function (target, field, receiver) {
      if (field === "on") {
        return subscribe;
      } else {
        return Reflect.get(target, field, receiver);
      }
    },
    set: function (target, field, value) {
      const fieldListeners = listeners[field];
      target[field] = value;
      if (!!fieldListeners) {
        for (let key in fieldListeners) {
          fieldListeners[key](target, field, value);
        }
      }
      return true;
    }
  });
  return proxy;
};
