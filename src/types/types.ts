export interface NavItem {
  title: string
  href: string
  icon: string
  active?: boolean
}

export interface NavItemGroup {
  title: string
  items: NavItem[]
}

export interface IconButton {
  icon: string
  title: string
  href: string
  tooltip?: string
}

export interface HeaderConfig {
  actionButtons: IconButton[]
  userMenu: {
    image: string
    fullName: string
  }
}

export interface StatCard {
  heading: string
  subheading: string
  number: number
}

export interface Device {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<string>
}

export interface Products {
  products: Array<Device>
  total: number
  skip: number
  limit: number;
}

export interface Post {
  title: string
  description: string
  timestamp: string
}

export interface Activity {
  recentPost: Post
  activityCount: number
}

export interface Event {
  title: string
  date: string
}

export interface Schedule {
  priority: Event[]
  other: Event[]
}
