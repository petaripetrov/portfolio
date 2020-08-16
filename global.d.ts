declare module 'lib'

type SEOData = {
    description?: string,
    lang?: string,
    meta?: any[],
    title?: string
}

type carrosselState = {
    current: "star" | "id-badge" | "list-alt" | "link"
}

type IconProps = {
    icon: IconDefinition
}

type DataProps = {
    children: React.ReactNode
}

type textBoxState = {
    width: string,
    height: string,
    x: number,
    y: number,
    text: {
        name: string,
        content: JSX.Element,
    }
}