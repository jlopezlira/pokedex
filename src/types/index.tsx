
export type TReactChildren = {
    children: React.ReactNode | React.ReactNode
}

export type TPokemonID = {
    id?: string | number
}

export type TPokemon = {
    name: string,
    url: string
}

export type TPokemonList = {
    list: Array<TPokemon>
}

export type TJSXElement = JSX.Element