import React from "react"
import { useTypedSelector } from "../../state/createStore"

const TextBox: React.FC = () => {
    const text = useTypedSelector(state => state.carrossel.current)

    return (
        <div className="text-box">
            <div className="text">
                {text}
            </div>
            <div className="subtext">
                The currently selected icon is {text}
            The currently selected icon is {text}The currently selected icon is {text}The currently selected icon is {text}The currently selected icon is {text}The currently selected icon is {text}
            </div>
        </div>
    )
}

export default TextBox