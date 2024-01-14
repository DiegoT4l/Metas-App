import styles from './Header.module.css';
import { ReactComponent as LogoIcon } from '../../img/logo.svg';
import { ReactComponent as ProfileIcon } from '../../img/profile.svg';
import Peg from './Peg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <LogoIcon className={styles.logo} />
                <a className={styles.title} href="/">Metas App</a>
            </div>

            <nav>
                <Peg
                    to='/Perfil'
                    Icon={ProfileIcon}
                />
            </nav>
        </header>
    );
}

export default Header;