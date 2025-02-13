import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

export const CloseBtn = () => {
  const [searchParams] = useSearchParams();
  const categoryType = searchParams.get("categoryType");
  const folderId = searchParams.get("folderId");

  return (
    <Link className="flex flex-row items-center justify-center ml-auto" to={`/library/category/archive?categoryType=${categoryType}&folderId=${folderId}`}>
      <Button variant={'destructive'} className="flex items-center justify-center h-8 bg-transparent" size={'icon'}>
        <X className="text-accent-foreground" size={15} />
      </Button>
    </Link>
  )
}