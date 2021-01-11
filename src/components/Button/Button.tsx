import { TElement, TLabel } from '../../types'

import styles from './Button.module.css'

const Button = ({ label }: TLabel): TElement => {
   return <button className={styles.button}>{label}</button>
}

export default Button
