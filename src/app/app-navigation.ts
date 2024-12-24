export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home',
  },
  // {
  //   text: 'Examples',
  //   icon: 'folder',
  //   items: [
  //     {
  //       text: 'Profile',
  //       path: '/profile',
  //     },
  //     {
  //       text: 'Tasks',
  //       path: '/tasks',
  //     },
  //   ],
  // },
  {
    text: 'Admin',
    icon: 'folder',
    items: [
      {
        text: 'Dashboard',
        path: 'admin/admin-dashboard',
      },
      {
        text: 'Company List',
        path: 'admin/company-list',
      },
    ],
  },
  {
    text: 'Company',
    icon: 'folder',
    items: [
      {
        text: 'Dashboard',
        path: '/company/company-dashboard',
      },
      {
        text: 'Employee',
        path: '/company/employee-list',
      },
      {
        text: 'Department',
        path: '/company/department-list',
      },
    ],
  },
  {
    text: 'Contacts',
    path: '/pages/contacts',
    icon: 'group',
  },
  {
    text: 'Employee',
    path: '/pages/employee',
    icon: 'group',
  },
];
