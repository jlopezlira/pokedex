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

export type TImage = {
   url?: string
}

export type TPokemon = {
   id?: number
   name: string
   url?: string
   experience?: number
   weight?: number
   height?: number
   abilities?: TAbility[] | boolean
   image: TImage
   types?: TType[] | undefined
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
