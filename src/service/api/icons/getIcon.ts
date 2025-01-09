import { http } from "@/config";
import { useQuery } from "@tanstack/react-query";

export async function getIcon(iconName: string) {
  const base64Data = await http.get(`/icons/${iconName}`).then((i) => i.data);
  return `data:image/png;base64,${base64Data}`;
}

export const useIcon = (iconName: string) =>
  useQuery({
    queryKey: ["icon", iconName],
    queryFn: () => getIcon(iconName),
    initialData: ''
  })