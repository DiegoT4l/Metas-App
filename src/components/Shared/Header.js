import'./Header.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as Profile } from '../../img/profile.svg';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo className='logo' />
                <a className='title' href="/">Metas App</a>
            </div>
            <nav>
                <a href="/Perfil" className="link">
                    <Profile className='icon' />
                </a>
            </nav>
        </header>
    );
}

export default Header;