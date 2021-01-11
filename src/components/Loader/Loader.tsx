import { TElement } from '../../types'
import styles from './Loader.module.css'

const Loader = (): TElement => (
   <div className={styles.loading}>
      <div className={styles.spinner}></div>
   </div>
)

export default Loader
