import SubscribeComponent from "../subscribeComponent/SubscribeComponent";
import './newsletter.scss';
import '../home/home.scss';

function Newsletter() {
    return (
        <section className="news bg_white">
            <div className="wrapper">
                <div className="block" id="contact">
                    <div className="block-title dark">
                        <h2>newsletter</h2>
                        <p>Lorem ipsum is simply dummy Business industry</p>
                    </div>
                    <SubscribeComponent />
                    <div className="block-content">
                        <div className="block-content_address">
                            <span>Address</span>
                            <ul>
                                <li>Business street</li>
                                <li>Second north section</li>
                                <li>Bavani nagar. 88769</li>
                                <li>Call: <a href="tel:+9879976999" className="tel">+987-9976-999</a></li>
                                <li><a href="mailto:info@businessface.com" className="mail">info@businessface.com</a></li>
                            </ul>
                        </div>
                        <div className="block-content-logo">
                            <img className="logotype"
                                 src="/images/logotype.png"
                                 alt="logotype"/>
                        </div>
                    </div>
                    <div className="block-navbar">
                        <ul className="navbar">
                            <li><a href="#home">home</a></li>
                            <li><a href="#service">service</a></li>
                            <li><a href="#about">about us</a></li>
                            <li><a href="#price">pricing table</a></li>
                            <li><a href="#work">how it work</a></li>
                            <li><a href="#request">happy clients</a></li>
                            <li><a href="#contact">contact us</a></li>
                        </ul>
                    </div>
                    <div className="block-contact">
                        <div className="block-contact_tel">
                            <img src="/images/phone_icon.png" alt="icon_phone"/>
                            <a href="tel:+9879976999">&nbsp;+987 9976 999</a>
                        </div>
                        <div className="block-contact_sprite">
                            <a href="https://twitter.com/" className="sprite__item"> </a>
                            <a href="https://ru-ru.facebook.com/" className="sprite__item"> </a>
                            <a href="https://www.google.com/" className="sprite__item"> </a>
                            <a href="https://www.instagram.com" className="sprite__item"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;