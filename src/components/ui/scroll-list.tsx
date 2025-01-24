import { useRef } from "react";

interface ScrollListProps {
  children: React.ReactNode
}

export const ScrollList = ({ children }: ScrollListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      if (containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="grid grid-flow-col gap-2 overflow-auto select-none grid-rows-18"
      onWheel={handleWheel}
    >
      {children}
    </div>
  )
}