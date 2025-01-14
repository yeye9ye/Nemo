import { useState } from "react";
import "./header.css";

function Header() {

    const [Toggle, showMenu] = useState(false);

    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">XI CHEN</a>

            <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
                <ul className="nav_list">

                    <li className="nav_item">
                        <a href="#home" className="nav_link active_link">
                            <i className="uil uil-estate nav_icon"></i>Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-archway nav_icon"></i>US Bridge Failures
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-message nav_icon"></i>Contact
                        </a>
                    </li>

                </ul>
                <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    );

}

export default Header;