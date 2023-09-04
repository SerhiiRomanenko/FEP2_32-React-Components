import '../App.css';
function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <ul className="header__menu">
                    <li>
                        <a className="header__menuItem" href="#">HOME</a>
                    </li>
                    <li>
                        <a className="header__menuItem" href="#">Products</a>
                    </li>
                    <li>
                        <a className="header__menuItem" href="#">Delivery</a>
                    </li>
                    <li>
                        <a className="header__menuItem" href="#">About us</a>
                    </li>
                    <li>
                        <a className="header__menuItem" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
