/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { CSSProperties, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, useAnimatedState } from 'framer-motion'

import '../../styles/global.css'

type DataProps = {
  children: any
}

const Star: React.FC = () => {

  const variant = {
    hidden: {
      left: `${Math.random() * 98}%`,
      top: `${Math.random() * 98}%`,
      transition: {
        type: "spring",
        delay: 0,
        stiffness: 500,
        damping: 60,
        mass: 1
      }
    },
    active: {
      opacity: [1, 0, 1],
      scale: [1, 0, 1],
      transition: {
        yoyo: Infinity,
        repeatDelay: Math.random()
      }
    }
  }

  return (
    <motion.div variants={variant} initial="hidden" style={{ position: 'absolute' }} animate="active" className="star"></motion.div>
  )
}

const Layout: React.FC<DataProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let items = []

  for (let i = 0; i < 100; i++) {
    items.push(<Star />)
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
