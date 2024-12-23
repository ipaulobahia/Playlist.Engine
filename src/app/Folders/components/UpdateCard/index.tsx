import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Dot, MoreVertical } from "lucide-react";

interface IUpdateCardProps {
  title: string
  size: string
  type: string
}

export const UpdateCard = ({ title, size, type }: IUpdateCardProps) => {
  return (
    <Card className="flex flex-row items-start gap-3 p-3 bg-transparent rounded cursor-pointer dark:hover:bg-muted/50 hover:bg-muted">
      <div className="flex items-center justify-center rounded bg-accent-foreground/30 dark:bg-accent size-7">
        <FileText className="text-white dark:text-muted-foreground size-4" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-start justify-between">
          <span className="text-xs font-medium">{title}</span>
          <Button
            size="icon"
            variant="ghost"
            className="rounded size-6"
          >
            <MoreVertical size={12} />
          </Button>
        </div>
        <div className="flex flex-row items-center gap-0.5">
          <span className="text-xs font-normal text-muted-foreground">{size}</span>
          <Dot className="text-xs font-normal text-muted-foreground" size={12} />
          <span className="text-xs font-normal text-muted-foreground">{type}</span>
        </div>
      </div>
    </Card>
  );
};
