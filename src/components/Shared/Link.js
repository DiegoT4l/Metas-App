import styles from './Links.module.css';

function Link({ text, Icon, href }) {
    return (
        <a href={href} className={styles.link}>
            <Icon className={styles.icon} />
            { text && <span className={styles.text}>{text}</span> }
        </a>
    );
}

export default Link;