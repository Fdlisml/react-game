import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from "../partials/NavigationBar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}
