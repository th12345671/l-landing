import { useRef, useEffect } from "react";

function useObserver(callbackFn) {
  const withObserverRef = useRef(null);
  const callbackFnRef = useRef(callbackFn);
  useEffect(() => {
    const options = {
      threshold: 0.7,
    };
    const callback = (entreis, observer) => {
      const entry = entreis[0];
      if (entry.isIntersecting) {
        callbackFnRef.current();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    const targetElement = withObserverRef.current;

    observer.observe(targetElement);
    return () => {
      observer.unobserve(targetElement);
    };
  }, []);
  return withObserverRef;
}

export default useObserver;
