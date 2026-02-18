export type BottomNavItem = {
  label: string;
  screen: string;
  icon?: string;
};

export type BottomNavBarProps = {
  items: BottomNavItem[];
  onNavPress?: (screen: string) => void;
};

