import './style.css'
import logo from './logo.png';

function Header() {
    return (
        <header className="App-header">
            <div className="logo-version__wrapper">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Version 1.0.0</p>
            </div>
        </header>

    )
}

export default Header;