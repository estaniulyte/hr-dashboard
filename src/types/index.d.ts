
export interface NavItem {
  title: string;
  href: string;
  icon: string;
};

export interface NavItemGroup {
  title: string;
  items: NavItem[];
}