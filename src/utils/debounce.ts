import { useMemo } from "react";

export default function useDebounce<T extends []>(
  debouncedFn: Function, // 需要防抖的函数
  immediateFn?: Function // 需要随时执行的函数
) {
  return useMemo(() => {
    let timer: number | undefined = undefined;

    return (...args: T) => {
      immediateFn && immediateFn(...args);
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        debouncedFn(...args);
        timer = undefined;
      }, 1000);
    };
  }, []);
}
