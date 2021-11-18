import './style.css'
import logo from './logo.png';
import icon from './icon-version.png';
import { version } from '../../../package.json'


function Header() {
    return (
        <header className="App-header">
            <div className="logo-version__wrapper">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="version-icon__wrapper">
                    <img src={icon} className="icon-version" alt="verion-icon" />
                    <p>Version {version}</p>
                </div>
            </div>
        </header >

    )
}

export default Header;