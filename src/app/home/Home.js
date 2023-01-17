import './home.scss';
import RequestForm from "../form_request/FormRequest";
import SimpleSlider from "../slider/Slider";

function Home() {
    return (
        <section id="home" className="home">
            <div className="wrapper">
                <div className="block">
                    <div className="block-title">
                        <h1>Boost up your local business</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum typesetting</p>
                    </div>
                    <RequestForm />
                    <div className="block-slider">
                        <div className="slider-bg">
                            <div className="slider-box">
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;