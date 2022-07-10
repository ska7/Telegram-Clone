export const makeActionCreator = (type) => {
  return function (payload) {
    const action = { type, payload };
    return action;
  };
};
