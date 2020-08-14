import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import { useTypedSelector } from "../../state/createStore"
import { graphql, useStaticQuery } from "gatsby"
import { carrosselState } from "../../state/reducers/carrosselReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    current: carrosselState
}

function getWidth() {
    return window.innerWidth
}

function useWindowWidth() {
    const [width, setWidth] = useState(getWidth())

    useEffect(() => {
        function handleResize() {
            setWidth(getWidth())
        }

        window.addEventListener('resize', handleResize)
        // return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width
}

const TextBox: React.FC = () => {
    const width = useWindowWidth()
    const current = useTypedSelector(state => state.carrossel.current)
    const [state, setState] = useState({ width: 0, height: 0, text: { name: "", content: () => { } } })

    useEffect(() => {
        switch (current) {
            case "id-badge":
                setState({
                    width: width > 768 ? 1000 : 300,
                    height: width > 768 ? 160 : 300,
                    text: {
                        name: "About me",
                        content: () => {
                            return (
                                <div>
                                    I am a new developer doing a bachelor's at Vrije Universiteit Amsterdam.
                                    <br />
                                    <br />
                                    Prior to my bachelor's,
                                    I have studied Applied Programming as a Professional Diploma(EQF level 4). Web Development is not all im
                                    interested in, I also enjoy hiking and working with microcontrollers.
                                </div>
                            )
                        }
                    }
                })
                break;
            case "list-alt":
                setState({
                    width: width > 768 ? 1000 : 300,
                    height: 200,
                    text: {
                        name: "My Repositories",
                        content: () => {
                            return (
                                <div>
                                    <em>insert graphql pulled links to pinned/starred repositories.</em>
                                </div>
                            )
                        }
                    }
                })
                break;
            case "link":
                setState({
                    width: width > 768 ? 1000 : 300,
                    height: 200,
                    text: {
                        name: "Links",
                        content: () => {
                            return (
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <a id="github" href="https://github.com/petaripetrov" target="_blank">/petaripetrov</a>
                                </div>

                            )
                        }
                    }
                })
                break;

            default:
                setState({
                    width: 0,
                    height: 0,
                    text: {
                        name: "About me",
                        content: () => { }
                    }
                })
                break;
        }
    }, [current, width])

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
                mass: 1,
            }}
            className="text-box">
            <div className="text">
                {state.text.name}
            </div>
            <div className="subtext">
                {/* The currently selected icon is {current} */}
                {state.text.content()}
            </div>
        </motion.div>
    )
}

export default TextBox