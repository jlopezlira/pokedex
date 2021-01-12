import { TElement, TReactChildren } from '../../types'

import styles from './Title.module.css'

const Title = ({ children }: TReactChildren): TElement => (
   <h2 className={styles.title}>{children}</h2>
)

export default Title
