import Link from './Link';
import styles from './Principal.module.css';
import { ReactComponent as ListIcon } from '../../img/list.svg';
import { ReactComponent as NewIcon } from '../../img/new.svg';

function Principal({ children }) {
    return (
        <div className={styles.Principalrincipal}>
            <aside className={styles.aside}>
                <Link href='/list' text='Lista de Metas'>
                    <ListIcon className='icon' />
                </Link>
                <Link href='/create' text='Nueva Meta'>
                    <NewIcon className='icon'/>
                </Link>
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>
    );
}

export default Principal;