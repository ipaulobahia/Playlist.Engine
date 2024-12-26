import { Button } from "@/components/ui/button";


interface FilterButtonProps {
  typeFile: string;
  currentType: string;
  label: string;
  onFilter: (type: string) => void;
}

export const FilterButton = ({ currentType, label, onFilter, typeFile }: FilterButtonProps) => {
  const isActive = typeFile === currentType;

  return (
    <Button
      onClick={() => onFilter(currentType)}
      size="sm"
      variant="outline"
      className={`h-6 px-5 border rounded ${isActive ? "dark:bg-black text-accent-foreground border-muted-foreground/25 border font-semibold" : "font-medium rounded bg-sidebar text-muted-foreground"}`}>
      {label}
    </Button>
  );
}