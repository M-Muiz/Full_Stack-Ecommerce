"use client"


import React from 'react'
import { IoAnalytics } from 'react-icons/io5'


const menu = [
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
  {
    title: "Transictions",
    icon: <IoAnalytics />,
    href: "#"
  },
];



const SideBar = () => {
  return (
    <div className='bg-white w-[300px] min-h-screen p-4 shrink-0'>
      <div className="flex items-center gap-4">
        <img className='size-12 rounded-full' src="/vercel.svg" alt="" />
      </div>
      <ul className="space-y-4 mt-6">
        {menu.map((item, ind) => (
  <li>{item.icon}</li>
))}
      </ul>
    </div>
  )
}

export default SideBar
