import React from "react"
import { useState, useEffect } from "react"
import { useTypedSelector } from "../../state/createStore"
import { useDispatch } from "react-redux"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { carrosselState, update } from "../../state/reducers/carrosselReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type IconProps = {
    icon: IconDefinition
}


const Icon: React.FC<IconProps> = ({ icon }) => {
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
        <FontAwesomeIcon onClick={handleClick} className={`icon ${selected ? "icon-selected" : ""}`} icon={icon} />
    )
}

export default Icon