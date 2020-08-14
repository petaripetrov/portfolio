/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const textEntry = [
        { name: "about", text: "about about about" },
        { name: "repos", text: "repos repos repos repos" },
        { name: "link", text: "link link link link link" }
    ]

    textEntry.forEach(entry => {
        const node = {
            name: entry.name,
            text: entry.text,
            id: createNodeId(`Entry-${entry.name}`),
            internal: {
                type: "TextEntry",
                contentDigest: createContentDigest(entry)
            },
        }
        actions.createNode(node)
    })
}