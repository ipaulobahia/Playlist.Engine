type ProfileConfig = {
  id: number;
  name: string;
  description: string;
  options: {
    id: number;
    name: string;
    description: string;
    isChecked: boolean;
    active: boolean;
    inputValue: string;
  }[];
}[]
