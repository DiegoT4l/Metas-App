import styles from './Links.module.css';
import {Link} from "react-router-dom";

function Peg({ text, Icon, to }) {
    return (
        <Link to={to} className={styles.link}>
            <Icon className={styles.icon} />
            { text && <span className={styles.text}>{text}</span> }
        </Link>
    );
}

export default Peg;