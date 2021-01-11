import { TElement, TReactChildren } from '../types'

import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }: TReactChildren): TElement => {
   return (
      <div>
         <Header />
         <div>{children}</div>
         <Footer />
      </div>
   )
}

export default Layout
