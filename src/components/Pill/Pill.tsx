import { TElement, TReactChildren } from '../../types'

import styles from './Pill.module.css'

const Pill = ({ children, dark }: TReactChildren): TElement => {
   const getTheme = dark ? styles.dark : styles.pill

   return <div className={`${styles.pill} ${getTheme}`}> {children}</div>
}

export default Pill
