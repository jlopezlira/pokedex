import { TElement, TReactChildren } from '../types'

import Header from '../components/Header'
import styles from './Layout.module.css'

const Layout = ({ children }: TReactChildren): TElement => {
   return (
      <div>
         <Header />
         <div className={styles.container}>{children}</div>
      </div>
   )
}

export default Layout
