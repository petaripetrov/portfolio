import React, { useState, useEffect } from "react"
import { motion, MotionTransform, AnimationProps } from "framer-motion"

import { useTypedSelector } from "../../state/createStore"

const TextBox: React.FC = () => {
    const current = useTypedSelector(state => state.carrossel.current)
    const [state, setState] = useState({ width: 0, height: 0 })

    useEffect(() => {
        switch (current) {
            case "id-badge":
                setState({
                    width: 300,
                    height: 300
                })
                break;
            case "list-alt":
                setState({
                    width: 300,
                    height: 400
                })
                break;
            case "link":
                setState({
                    width: 300,
                    height: 200
                })
                break;

            default:
                setState({
                    width: 0,
                    height: 0
                })
                break;
        }
    }, [current])

    return (
        <motion.div
            animate={{
                width: state.width,
                height: state.height,
            }}
            transition={{
                type: "spring",
                delay: 0,
                stiffness: 500,
                damping: 60,
                mass: 1
            }}
            className="text-box">
            <div className="text">
                {current}
            </div>
            <div className="subtext">
                The currently selected icon is {current}
            </div>
        </motion.div>
    )
}

export default TextBox