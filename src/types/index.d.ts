
export interface NavItem {
  title: string;
  href: string;
  icon: string;
  active?: boolean;
};

export interface NavItemGroup {
  title: string;
  items: NavItem[];
}