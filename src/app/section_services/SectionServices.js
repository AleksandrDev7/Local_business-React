import './sectionServices.scss';
import '../home/home.scss';
import ServicesComponent from "../services/ServicesComponent";

function SectionServices() {
    return (
        <section className="services bg_white">
            <div className="wrapper">
                <div id="service" className="block">
                    <div className="block-title dark">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum is dummy Business industry</p>
                    </div>
                    <ServicesComponent/>
                </div>
            </div>
        </section>
    );
}

export default SectionServices;