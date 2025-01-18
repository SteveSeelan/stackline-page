import styles from './header.module.css';
import logo from '../../assets/stackline_logo.svg';

const Header = () => {
    // const logo = require('../../assets/stackline_logo.svg') as string;
    
    return (
        <header className={styles.header}>
            <img src={logo} alt="title" className={styles.logo} />
        </header>
    );
};

export default Header;