import Peg from './Peg';
import styles from './Principal.module.css';
import { ReactComponent as ListIcon } from '../../img/list.svg';
import { ReactComponent as NewIcon } from '../../img/new.svg';

function Principal({ children }) {
    return (
        <div className={styles.principal}>
            <aside className={styles.aside}>
                <Peg
                to='/list'
                text='Lista de Metas'
                Icon={ListIcon}
                />

                <Peg
                to='/create'
                text='Nueva Meta'
                Icon={NewIcon}
                />
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

export default Principal;