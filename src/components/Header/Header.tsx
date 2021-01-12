import { Link } from 'react-router-dom'
import Logo from '../../assets/static/logo.svg'
import Pokeball from '../../assets/static/pokeball.svg'
import Search from '../Search'
import { TElement } from '../../types'
import styles from './Header.module.css'
import useShowOrFixedData from '../../hooks/useShowOrFixed'
const Header = (): TElement => {
   const { showFixed } = useShowOrFixedData()

   const getStaticHeader = (): React.ReactNode => (
      <>
         <Link to="/">
            <img src={Logo} alt="Pokedex" className={styles.logo} />
         </Link>
         <Search />
      </>
   )

   const getFixedHeader = (): React.ReactNode => (
      <>
         <div className={styles.fixed}>
            <Link to="/">
               <img src={Pokeball} alt="Pokedex" className={styles.pokeball} />
            </Link>
            <Search />
         </div>
      </>
   )

   return (
      <header className={styles.header}>
         {showFixed ? getFixedHeader() : getStaticHeader()}
      </header>
   )
}

export default Header
