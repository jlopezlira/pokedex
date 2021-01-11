export type TReactChildren = {
   children: React.ReactNode | React.ReactNode
}

export type TPokemonID = {
   id?: string | number
}

export type TPokemon = {
   name: string
   url: string
}

export type TLabel = {
   label: string
}

export type TPokemonList = TPokemon[]

export type TElement = JSX.Element

export type TEmpty = any | unknown

export type TPokemonType = {
   name: string
   url?: string
}

export type TPokemonTypes = TPokemonType[]
