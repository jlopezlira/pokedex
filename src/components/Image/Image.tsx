import { TElement, TImage } from '../../types'

import placeHolderImage from '../../assets/static/skeleton.gif'
import styles from './Image.module.css'

const Image = ({ url }: TImage): TElement => {
   console.log(url)
   const imageToLoad = url === '' ? placeHolderImage : url

   return (
      <div className={styles.container}>
         <img className={styles.image} src={imageToLoad} alt="Image" />
      </div>
   )
}

export default Image
