export type TReactChildren = {
   children: React.ReactNode | React.ReactNode
   dark?: boolean
}

export type TPokedex = {
   pokedex?: string | number
}

export type TAbility = {
   name?: string
   url?: string
}

export type TType = {
   name?: string
   url?: string
}

export type TImage = string

export type TPokemon = {
   id?: number
   name: string
   url: string
   experience: number
   weight: number
   height: number
   abilities: TAbility[]
   types: TType[]
   images: TImage
}

export type TCard = {
   id?: number
   name: string
   url?: string
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
