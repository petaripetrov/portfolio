import React from "react"

const textStyle: React.CSSProperties = {
    width: 184,
    height: 88,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible"
}

const petarPetrov: React.CSSProperties = {
    width: 183,
    height: 36,
    fontFamily: `"Inter-Bold", "Inter", sans-serif`,
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 700,
}

const text: React.CSSProperties = {
    width: 183,
    height: "100%",
    flexDirection: "row",
    fontFamily: `"Inter", sans-serif`,
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 1.2,
}

const Name: React.FC = () => {

    return (
        <div style={textStyle}>
            <div style={petarPetrov}>
                Petar Petrov
            </div>
            <div style={text}>
                Newly graduated developer!
            </div>
        </div>
    )
}

export default Name