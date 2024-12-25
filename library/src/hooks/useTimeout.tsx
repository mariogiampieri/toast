import { useCallback, useEffect, useRef } from 'react';

interface UseTimeoutReturn {
  pause: () => void;
  resume: () => void;
  reset: () => void;
  isActive: boolean;
}

export const useTimeout = (
  callback: () => void,
  delay: number,
): UseTimeoutReturn => {
  const timeoutRef = useRef<number>();
  const callbackRef = useRef(callback);
  const startTimeRef = useRef<number>();
  const remainingRef = useRef(delay);
  const isActiveRef = useRef(true);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  const pause = useCallback(() => {
    if (!isActiveRef.current || !startTimeRef.current) return;

    cleanup();
    remainingRef.current -= Date.now() - startTimeRef.current;
    isActiveRef.current = false;
  }, [cleanup]);

  const resume = useCallback(() => {
    if (isActiveRef.current) return;

    startTimeRef.current = Date.now();
    timeoutRef.current = window.setTimeout(
      callbackRef.current,
      remainingRef.current,
    );
    isActiveRef.current = true;
  }, []);

  const reset = useCallback(() => {
    cleanup();
    remainingRef.current = delay;
    startTimeRef.current = Date.now();
    timeoutRef.current = window.setTimeout(callbackRef.current, delay);
    isActiveRef.current = true;
  }, [cleanup, delay]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    reset();
    return cleanup;
  }, [delay, reset, cleanup]);

  return {
    pause,
    resume,
    reset,
    isActive: isActiveRef.current,
  };
};
