import styles from './Header.module.css';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';
import { ReactComponent as ProfileIcon } from '../../img/profile.svg';
import Link from './Link';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <LogoIcon className={styles.logo} />
                <a className={styles.title} href="/">Metas App</a>
            </div>

            <nav>
                <Link
                    href='/Perfil'
                    className={styles.link}
                    Icon={ProfileIcon}
                />
            </nav>
        </header>
    );
}

export default Header;