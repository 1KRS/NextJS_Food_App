import Link from 'next/link';
import logoImg from '../assets/logo.png';
import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="A plate with food on it." />
        Next Level Food!
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
