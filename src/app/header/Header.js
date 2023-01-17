import './header.scss';
import { slide as Menu } from 'react-burger-menu';

function Header() {
  return (
    <header>
        <div className="wrapper">
            <div className="header">
                <img className="logotype"
                     src="/images/logotype.png"
                     alt="logotype"/>
                <nav className="menu">
                    <ul>
                        <li><a href="#home">home</a></li>
                        <li><a href="#service">service</a></li>
                        <li><a href="#about">about us</a></li>
                        <li><a href="#price">pricing table</a></li>
                        <li><a href="#work">how it work</a></li>
                        <li><a href="#request">happy clients</a></li>
                        <li><a href="#contact">contact us</a></li>
                    </ul>
                </nav>
                <div className="menu-mobile">
                    <Menu right>
                        <li><a href="#home">home</a></li>
                        <li><a href="#service">service</a></li>
                        <li><a href="#about">about us</a></li>
                        <li><a href="#price">pricing table</a></li>
                        <li><a href="#work">how it work</a></li>
                        <li><a href="#request">happy clients</a></li>
                        <li><a href="#contact">contact us</a></li>
                    </Menu>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
