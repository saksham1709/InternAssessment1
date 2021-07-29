import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => {
        setClick(!click);
    }
    return (
        <div className="navbar">
            <div className="nav">
                <img src="./images/logo.png" alt="img" />
                <ul className={click ? 'list active' : 'list'}>
                    <li className="links"><Link to="/">Integration</Link></li>
                    <li className="links"><Link to="/">Pricing</Link></li>
                    <li className="links"><Link to="/">Blog</Link></li>
                    <li className="links"><Link to="/">About us</Link></li>
                    <li className="list-button">
                        <Link to="/contact" className="link-button">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-toggle">
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleclick}></i>
            </div>
            <a href="https://thesocialcomment.com/register" target="_blank" className="cta">Get early access</a>
        </div>
    );
}

export default Navbar;