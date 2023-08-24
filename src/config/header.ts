import { type HeaderConfig } from '@/types/types'

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
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    fullName: 'Admirra John'
  }
}