import styles from './Goal.module.css';
import {Link} from "react-router-dom";

function Goal({ id, details, period, icon, frequency, finish, completed }) {

    return (
        <Link to={`/list/${id}`} className={styles.goal + ' card'}>
            <div className='flex items-center'>
                <div className={styles.icon}>{icon}</div>
                <p className="text-xl ml-5 mr-10">{frequency}<sub className='text-xs text-gray-500 ml-1'>/ {period}</sub></p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{completed} de {finish}</p>
                    <div className={styles.bar1}>
                        <div className={styles.bar2} style={{ width: `${Math.round((completed / finish) * 100)}%` }}></div>
                    </div>
                </div>
                <button className='button button--gray'>Completado</button>
            </div>
        </Link>
    );
}

export default Goal;