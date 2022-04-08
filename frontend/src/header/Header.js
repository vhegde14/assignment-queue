import './Header.css';
import Divider from '@mui/material/Divider';

function Header() {
    return(
        <div id="welcome-message-container">
            <p id="welcome-message">Welcome to your Assignment Queue</p>
            <Divider id="welcome-divider" />
        </div>
    );
}

export default Header;