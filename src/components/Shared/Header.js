import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Profile } from '../../img/profile.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                <a className={styles.title} href="/">Metas App</a>
            </div>
            <nav>
                <a href="/Perfil" className={styles.link}>
                    <Profile className={styles.icon} />
                </a>
            </nav>
        </header>
    );
}

export default Header;