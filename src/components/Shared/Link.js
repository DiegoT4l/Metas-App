import styles from './Links.module.css';

function Link({ text, Icon, href }) {
    return (
        <a href={href} className="link">
            <Icon className={styles.icon} />
            <span className="text">{text}</span>
        </a>
    );
}

export default Link;