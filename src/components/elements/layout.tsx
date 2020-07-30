/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { CSSProperties } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, useAnimatedState } from 'framer-motion'

import '../../styles/global.css'

type DataProps = {
  children: any
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

  let test = {
    initial: {

    },
    animated: {
      scale: [1, 0.8, 1],
      opacity: [1, 0.5, 1],
      transition: {
        yoyo: Infinity,
        repeatDelay: Math.random()
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    let star =
      <motion.div className="star-wrapper" animate={{
        left: Math.random() * window.innerWidth - 10,
        top: Math.random() * window.innerHeight - 10
      }}
        transition={{
          type: "spring",
          delay: 0,
          stiffness: 500,
          damping: 60,
          mass: 1
        }} >
        <motion.div
          className="star"
          animate={{ opacity: [1, 0, 1], scale: [1, 0.2, 1] }} transition={{ yoyo: Infinity, repeatDelay: Math.random() * 20 }}
        >
        </motion.div>
      </motion.div>
    items.push(star)
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
