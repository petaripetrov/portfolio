import React from 'react'
import { motion } from 'framer-motion'

const Star = () => {

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

export default Star