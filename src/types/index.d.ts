
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

export interface IconButton {
  icon: string;
  title: string;
  href: string;
  tooltip?: string;
}

export interface HeaderConfig {
  actionButtons: IconButton[];
  userMenu: {
    image: string;
    fullName: string;
  }
}

export interface StatCard {
  heading: string;
  subheading: string;
  number: number;
}

export interface Device {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: float;
  rating: float;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

}