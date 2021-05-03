import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa';
import{ Trans } from 'react-i18next';

export const SidebarData = [
  {
    title: <Trans>Home</Trans>,
    path: '/home',
    icon: <ImIcons.ImStatsDots />,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Products</Trans>,
    path: '/',
    icon: <RiIcons.RiProductHuntFill />,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Sales</Trans>,
    path: '/sale',
    icon: <MdIcons.MdShop />,
    ClassName: 'nav-text',
    conClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    menuDropdown:[
        {
      tittle:'NewSale',
      path:'/sale/new'
        }
      ]
    
  },
  {
    title: <Trans>Purchase</Trans>,
    path: '/purchase',
    icon: <FaIcons.FaCreditCard />,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Inventory</Trans>,
    path: '/inventory',
    icon: <IoIcons.IoIosPaper/>,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Reports</Trans>,
    path: '/report',
    icon: <IoIcons.IoIosStats />,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Employee</Trans>,
    path: '/employee',
    icon: <FcIcons.FcBusinessman/>,
    ClassName: 'nav-text'
  },
  {
    title: <Trans>Profile</Trans>,
    path: '/profile',
    icon: <BsIcons.BsPeopleCircle />,
    ClassName: 'nav-text'
  },
  
];