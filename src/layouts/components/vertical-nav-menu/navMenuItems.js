/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: '/dashboard/analytics',
    name: 'Dashboard',
    tagColor: 'warning',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    header: 'Apps',
    icon: 'BookIcon',
    i18n: 'Apps',
    items: [
      {
        url: null,
        name: 'Bill',
        icon: 'FileTextIcon',
        tag: '2',
        tagColor: 'success',
        i18n: 'Bill',
        submenu: [
          {
            url: '/apps/bill/insert',
            name: 'Insert Bill',
            i18n: 'InsertBill'
          },
          {
            url: '/apps/bill/random',
            name: 'Random Bill',
            i18n: 'RandomBill'
          }
        ]
      },
      {
        url: null,
        name: 'Business',
        icon: 'BriefcaseIcon',
        tag: '2',
        tagColor: 'success',
        i18n: 'Business',
        submenu: [
          {
            url: '/apps/business/insert',
            name: 'Insert Business',
            i18n: 'InsertBusiness'
          },
          {
            url: '/apps/business/manage',
            name: 'Manage Business',
            i18n: 'ManageBusiness'
          }
        ]
      },
      {
        url: null,
        name: 'Stock',
        icon: 'ArchiveIcon',
        tag: '3',
        tagColor: 'success',
        i18n: 'Stock',
        submenu: [
          {
            url: '/apps/stock/insert',
            name: 'Insert Stock',
            i18n: 'InsertStock'
          },
          {
            url: '/apps/stock/manage',
            name: 'Manage Stock',
            i18n: 'ManageStock'
          },
          {
            url: '/apps/stock/delete',
            name: 'Delete Stock',
            i18n: 'DeleteStock'
          }
        ]
      },
      {
        url: null,
        name: 'Unit',
        icon: 'FileIcon',
        tag: '2',
        tagColor: 'success',
        i18n: 'Unit',
        submenu: [
          {
            url: '/apps/unit/insert',
            name: 'Insert Unit',
            i18n: 'InsertUnit'
          },
          {
            url: '/apps/unit/manage',
            name: 'Manage Unit',
            i18n: 'ManageUnit'
          }
        ]
      },
      {
        url: null,
        name: 'Type',
        icon: 'InboxIcon',
        tag: '2',
        tagColor: 'success',
        i18n: 'Type',
        submenu: [
          {
            url: '/apps/type/insert',
            name: 'Insert Type',
            i18n: 'InsertType'
          },
          {
            url: '/apps/type/manage',
            name: 'Manage Type',
            i18n: 'ManageType'
          }
        ]
      }
    ]
  }
]

