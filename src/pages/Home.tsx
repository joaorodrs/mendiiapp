import React from 'react'

import SideNavBar from '../components/SideNavBar'

import '../styles/pages/Home.css'

const Home: React.FC = () => {
  return (
    <main>
      <SideNavBar />

      <div className="page-content"></div>
    </main>
  )
}

export default Home
