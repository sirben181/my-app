import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'
import * as FcIcons from 'react-icons/fc'
export const SidebarData = [
  {
    title:'Home',
    path:'/',
    cName:'nav-text',
    icon:<FaIcons.FaHome />,
  },
  {
    title:'Products',
    path:'/products',
    cName:'nav-text',
    icon: <GiIcons.GiMilkCarton />, 
  },
  {
    title:'Contacts',
    path:'/contacts',
    cName:'nav-text',
    icon:<MdIcons.MdOutlineContactPhone />,
  },
  {
    title:'About',
    path:'/about',
    cName:'nav-text',
    icon:<FcIcons.FcAbout />,
  },
 
  
]
  
