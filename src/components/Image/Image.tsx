import { TElement } from '../../types'
import placeHolderImage from '../../assets/static/skeleton.gif'
import styles from './Image.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Image = ({ image }: any): TElement => {
   const imageToLoad = image === '' ? placeHolderImage : image

   return (
      <div className={styles.container}>
         <img className={styles.image} src={imageToLoad} alt="Image" />
      </div>
   )
}

export default Image
