import "../styles/Nav.scss";
import logoImage from "../assets/images/logo225x230.png";

const Nav = function () {
    return (
        <nav className="side-navbar">
            <div className="side-navbar__links">
                <img src={logoImage} alt="Logo"
                    className="side-navbar__logo"
                />
                <img
                    src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt="Profile"
                    className="side-navbar__profile-picture"
                />
                <a href="https://google.com" className="side-navbar__link">test1</a>
                <a href="https://google.com" className="side-navbar__link">test2</a>
                <a href="https://google.com" className="side-navbar__link">test3</a>
                <a href="https://google.com" className="side-navbar__link">test4</a>
                <a href="https://google.com" className="side-navbar__link">test5</a>
            </div>
        </nav>
    );
};

export default Nav;