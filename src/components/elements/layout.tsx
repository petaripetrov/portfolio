import React from "react"

import '../../styles/global.css'
import Star from "./star"

const Layout: React.FC<DataProps> = ({ children }) => {
  let items = []

  for (let i = 0; i < 100; i++) {
    items.push(<Star key={i} />)
  }

  return (
    <div>
      {items}
      <main>
        {children}
      </main>
    </div >
  )
}

export default Layout
