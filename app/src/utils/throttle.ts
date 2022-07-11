let throttlePause: boolean;

export const throttle = (callback: () => void, time: number): (() => void) => {
  if (throttlePause) return;

  throttlePause = true;

  setTimeout(() => {
    callback();

    throttlePause = false;
  }, time);
};
