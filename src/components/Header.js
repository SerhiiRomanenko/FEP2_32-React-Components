import '../App.css';
import logo from '../images/header_logo-1.png'

function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <a href="">
                    <img className="header__logo" src={logo} alt=""/>
                </a>
                <h1 className="header__title">ROZETKA</h1>
            </div>
        </header>
    );
}

export default Header;
