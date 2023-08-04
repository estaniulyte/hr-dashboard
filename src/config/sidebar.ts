import { type NavItemGroup } from '@/types/types'

import {
  dashboardIconPath,
  departmentIconPath,
  employeeIconPath,
  recruitmentIconPath,
  settingsIconPath,
  supportIconPath,
  scheduleIconPath
} from './iconPaths'

export const sidebar: NavItemGroup[] = [
  {
    title: 'Main Menu',
    items: [
      {
        title: 'Dashboard',
        href: '/dashbpard',
        icon: dashboardIconPath,
        active: true
      },
      {
        title: 'Recruitment',
        href: '/recruitment',
        icon: recruitmentIconPath
      },
      {
        title: 'Schedule',
        href: '/schedule',
        icon: scheduleIconPath
      },
      {
        title: 'Employee',
        href: '/employee',
        icon: employeeIconPath
      },
      {
        title: 'Department',
        href: '/department',
        icon: departmentIconPath
      }
    ]
  },
  {
    title: 'Other',
    items: [
      {
        title: 'Support',
        href: '/support',
        icon: supportIconPath
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: settingsIconPath
      }
    ]
  }
]
