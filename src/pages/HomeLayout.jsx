import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from "../components"
import Footer from '../components/Footer'

function HomeLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default HomeLayout
