import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { faker } from "@faker-js/faker";
import { FileText, Dot, MoreVertical } from "lucide-react";

export const UpdateCard = () => {
  return (
    <Card className="flex flex-row items-start gap-3 p-3 bg-transparent rounded cursor-pointer border-muted-foreground/25 dark:hover:bg-muted/50 hover:bg-muted">
      <div className="flex items-center justify-center rounded bg-accent-foreground/30 dark:bg-accent size-7">
        <FileText className="text-white dark:text-muted-foreground size-4" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-start justify-between">
          <span className="text-xs font-medium">{faker.system.fileName()}</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                size="icon"
                variant="ghost"
                className="rounded size-6"
              >
                <MoreVertical size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                Abrir
              </DropdownMenuItem>
              <DropdownMenuItem>Remover</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-row items-center gap-0.5">
          <span className="text-xs font-normal text-muted-foreground">{faker.number.int({ min: 1, max: 100 }) + 'KB'}</span>
          <Dot className="text-xs font-normal text-muted-foreground" size={12} />
          <span className="text-xs font-normal text-muted-foreground">{faker.helpers.arrayElement(['mp3', 'mp4', 'txt'])}</span>
        </div>
      </div>
    </Card>
  );
};
