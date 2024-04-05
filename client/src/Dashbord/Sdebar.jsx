import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import proflepic from "../assets/profile.jpg"

function Sdebar() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example" className='mb-50px '>
    <Sidebar.Logo href="#" img={proflepic} imgAlt="Flowbite logo">
      Flowbite
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
        Upload Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
         Manage Books
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          Sign Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default Sdebar
