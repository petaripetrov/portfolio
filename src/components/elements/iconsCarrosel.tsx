import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faIdBadge, faListAlt, IconDefinition, } from "@fortawesome/free-regular-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

type IconProps = {
    icon: IconDefinition
}

const Icon: React.FC<IconProps> = ({ icon }) => {
    const [disable, setDisable] = useState(false)

    function handleOnClick() {
        setDisable(disable!)
    }

    return (
            <FontAwesomeIcon onClick={handleOnClick} className="icon" icon={icon} />
    )
}

const IconsCarrosel: React.FC = () => {

    return (
        <div className="icon-carrosel">
            <Icon icon={faStar} />
            <Icon icon={faIdBadge} />
            <Icon icon={faListAlt} />
            <Icon icon={faLink} />
        </div>
    )
}

export default IconsCarrosel