import React from "react"
import { faStar, faIdBadge, faListAlt } from "@fortawesome/free-regular-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Icon from "./icon"

const IconsCarrosel = () => (
    <div className="icon-carrosel">
        <Icon icon={faStar} />
        <Icon icon={faIdBadge} />
        <Icon icon={faListAlt} />
        <Icon icon={faLink} />
    </div>
)

export default IconsCarrosel