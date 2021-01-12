import { useEffect, useState } from 'react'

const useShowOrFixed = (): any => {
   const [showFixed, setShowFixed] = useState(false)

   useEffect(() => {
      const onScroll = (e: any) => {
         const newShowFixed = window.scrollY > 150
         showFixed !== newShowFixed && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
   }, [showFixed])

   return { showFixed }
}

export default useShowOrFixed
