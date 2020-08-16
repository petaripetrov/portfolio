import React from "react"
import { useState, useEffect } from "react"
import { useTypedSelector } from "../../state/createStore"
import { useDispatch } from "react-redux"
import { update } from "../../state/reducers/carrosselReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"


const Icon = ({ icon }: IconProps) => {
    const [selected, setSelected] = useState(false)
    const currentSelected = useTypedSelector(state => state.carrossel.current)
    const dispatch = useDispatch()

    useEffect(() => {
        if (currentSelected === icon.iconName) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [currentSelected])

    function handleClick() {
        let cast: unknown = (icon.iconName as unknown)
        let name: carrosselState = (cast as carrosselState)
        dispatch(update(name))
    }

    return (
        <motion.div
            animate={{
                opacity: selected ? 0.7 : 1,
            }}
            whileHover={{
                rotate: selected ? 0 : [0, -5, 5, -5, 0] 
            }}
            >
            <FontAwesomeIcon onClick={handleClick} className={`icon ${selected ? "icon-selected" : ""}`} icon={icon} />
        </motion.div>
    )
}

export default Icon