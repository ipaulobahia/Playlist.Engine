import { faker } from "@faker-js/faker";
import { Folder } from "lucide-react";
import { useRef } from "react";
import { Toolbar } from "./components";
import { Link } from "react-router-dom";

export const CategoryList = () => {

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
    <section>
      <Toolbar />
      <div
        ref={containerRef}
        className="grid grid-flow-col gap-2 overflow-auto grid-rows-20"
        onWheel={handleWheel}
      >
        {
          [...Array(250)].map((_, index) => {
            return (
              <Link
                key={index}
                to={`/library/category/archive?folderId=${index}`}
              >
                <div
                  className="px-3 flex items-center gap-1.5 py-1.5 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer rounded"
                >
                  <Folder size={16} />
                  <span className="text-sm font-medium">
                    {faker.system.fileName().split(".")[0]}
                  </span>
                </div>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}