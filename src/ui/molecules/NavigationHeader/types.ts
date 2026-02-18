export type NavigationHeaderNavItem = {
  label: string;
  screen: string;
};

export type NavigationHeaderProps = {
  title: string;
  navItems?: NavigationHeaderNavItem[];
  onNavPress?: (screen: string) => void;
  showBack?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
};

