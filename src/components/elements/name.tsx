import React, { useState, useEffect } from "react"
import IconsCarrosel from "./iconsCarrosel"

const Name: React.FC = () => {

    return (
        <div className="stack">
            <div className="text-wrapper">
                <div className="name">
                    Petar Petrov
            </div>
                <div className="short-description">
                    Newly graduated developer!
            </div>
            </div>
            <IconsCarrosel />
        </div>
    )
}

export default Name