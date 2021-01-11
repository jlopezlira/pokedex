import { TElement, TLabel } from '../../types'

import styles from './TextInput.module.css'

const TextInput = ({ label }: TLabel): TElement => {
   return (
      <div className={styles.field}>
         <span className="fas fa-search"></span>
         <input type="text" required placeholder={label} />
      </div>
   )
}

export default TextInput
