import '../App.css';

function Nav() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <h4>Navigation Bar</h4>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
