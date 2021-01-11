import { Link } from 'react-router-dom'
import Logo from '../../assets/static/logo.svg'
import Search from '../Search'
import { TElement } from '../../types'
import styles from './Header.module.css'

const Header = (): TElement => {
   return (
      <header className={styles.header}>
         <Link to="/">
            <img src={Logo} alt="Pokedex" className={styles.logo} />
         </Link>
         <Search />
      </header>
   )
}

export default Header
