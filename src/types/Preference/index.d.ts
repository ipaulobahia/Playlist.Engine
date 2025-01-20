type PreferenceConfig = {
  id: number;
  name: string;
  description: string;
  path: string;
  options: {
    id: number;
    name: string;
    description: string;
    status: boolean;
    value: string;
    type: "Input" | "Switch";
    isActive: boolean;
  };
}[]
