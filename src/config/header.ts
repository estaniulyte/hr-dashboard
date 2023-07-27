import { type HeaderConfig } from '@/types/index.d'

import {
  notificationsIconPath,
  chatIconPath
} from './iconPaths'

export const header: HeaderConfig = {
  actionButtons: [
    {
      icon: notificationsIconPath,
      title: 'Notifications',
      href: '/notifications',
      tooltip: 'Open notifications'
    },
    {
      icon: chatIconPath,
      title: 'Messages',
      href: '/messages',
      tooltip: 'Open messages'
    }
  ],
  userMenu: {
    image: '/src/assets/img.png',
    fullName: 'Admirra John'
  }
}