import { useEffect, useRef, useState } from "react";

export function useEllipsisCheck<T extends HTMLElement>(dependency?: any) {
  const textRef = useRef<T>(null);
  const [isEllipsis, setIsEllipsis] = useState(false);

  useEffect(() => {
    const checkEllipsis = () => {
      if (textRef.current) {
        setIsEllipsis(textRef.current.scrollWidth > textRef.current.clientWidth);
      }
    };

    const observer = new ResizeObserver(() => checkEllipsis());

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [dependency]);

  return { textRef, isEllipsis };
}