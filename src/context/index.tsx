import { TPokedexContext, TReactChildren } from '../types'
import { createContext, useState } from 'react'

export const PokedexContext = createContext<TPokedexContext | null>(null)

const PokedexProvider = ({ children }: TReactChildren): any => {
   const [currentPokedex, setCurrentPokedex] = useState('')

   const savePokedex = (query: string) => {
      const newPokedex: string = query ?? ''
      setCurrentPokedex(newPokedex)
   }

   return (
      <PokedexContext.Provider value={{ currentPokedex, savePokedex }}>
         {children}
      </PokedexContext.Provider>
   )
}

export default PokedexProvider
