import { useEffect, useRef, useState } from 'react';

export const useContainerWidth = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entries]) => {
      setWidth(entries.contentRect.width);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, width];
};
