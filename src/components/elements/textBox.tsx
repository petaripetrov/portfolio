import React, { useState, useEffect } from "react"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import { useMedia } from "react-media"

import { useTypedSelector } from "../../state/createStore"
import { graphql, useStaticQuery } from "gatsby"
import { carrosselState } from "../../state/reducers/carrosselReducer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    current: carrosselState
}

const TextBox = () => {
    const isLargeScreen = useMedia({ query: "(min-width: 768px)" })
    const current = useTypedSelector(state => state.carrossel.current)
    const [state, setState] = useState<textBoxState>({ width: '0', height: '0', x: 0, y: 0, text: { name: "", content: <div /> } })
    const data = useStaticQuery(graphql`
    query MyQuery {
        githubData {
          data {
            user {
              pinnedItems {
                edges {
                  node {
                    id
                    name
                    url
                  }
                }
              }
            }
          }
        }
      }
    `)

    const repos = data.githubData.data.user.pinnedItems.edges.map((element: any, i: number) => {
        return (<a href={element.node.url} key={i}>{element.node.name}</a>)
    });

    useEffect(() => {
        switch (current) {
            case "id-badge":
                setState({
                    width: isLargeScreen ? '90%' : '100%',
                    height: '100%',
                    x: 0,
                    y: 0,
                    text: {
                        name: "About me",
                        content:
                            (
                                <div>
                                    I am a new developer doing a bachelor's at Vrije Universiteit Amsterdam.
                                    <br />
                                    <br />
                                    Prior to my bachelor's,
                                    I have studied Applied Programming as a Professional Diploma(EQF level 4). Web Development is not all im
                                    interested in, I also enjoy hiking and working with microcontrollers.
                                </div>
                            ),
                    }
                })
                break;
            case "list-alt":
                setState({
                    width: isLargeScreen ? "90%" : "100%",
                    height: "90%",
                    y: isLargeScreen ? 200 : 0,
                    x: isLargeScreen ? -100 : 0,
                    text: {
                        name: "My Repositories",
                        content: (
                            <div>
                                {repos}
                            </div>
                        )
                    }
                })
                break;
            case "link":
                setState({
                    width: isLargeScreen ? '90%' : "100%",
                    height: "100%",
                    y: isLargeScreen ? 500 : 0,
                    x: isLargeScreen ? 150 : 0,
                    text: {
                        name: "Links",
                        content:
                            (
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <a id="github" href="https://github.com/petaripetrov" target="_blank">/petaripetrov</a>
                                </div>

                            )
                    }
                })
                break;

            default:
                setState({
                    width: '0',
                    height: '0',
                    x: 0,
                    y: 0,
                    text: {
                        name: "",
                        content: <div />
                    }
                })
                break;
        }
    }, [current, isLargeScreen])

    return (
        <motion.div
            animate={{
                width: state.width,
                height: state.height,
                x: state.x,
                y: state.y,
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
            <div
            className="subtext">
                {state.text.content}
            </div>
        </motion.div>
    )
}

export default TextBox