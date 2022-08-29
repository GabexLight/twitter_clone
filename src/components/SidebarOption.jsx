import React from 'react'
import "../components/SidebarOption.css"

function SidebarOption({ active, text, icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <span className='MuiIcon'>{icon}</span>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption