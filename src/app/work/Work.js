import './work.scss'
import '../home/home.scss';

function Work() {
    return(
        <section id="work" className="bg_white">
            <div className="wrapper">
                <div className="block">
                    <div className="block-title dark">
                        <h2>How it works</h2>
                        <p>lorem ipsum is simply dummy Business industry</p>
                    </div>
                    <div className="block-box_steps">
                        <div className="step">
                            <img className="step-img" src="/images/icon_step1.png" alt="step1"/>
                            <p className="step_title">Step 1</p>
                            <p className="step_text">Lorem Ipsum is simply dummy text of the printing and typesetting ind ustry. Lorem Ipsum has been</p>
                        </div>
                        <img className="step_jump" src="/images/Shape.png" alt="jump" />
                        <div className="step">
                            <img className="step-img" src="/images/icon_step2.png" alt="step2"/>
                            <p className="step_title">Step 2</p>
                            <p className="step_text">Lorem Ipsum is simply dummy text of the printing and typesetting ind ustry. Lorem Ipsum has been</p>
                        </div>
                        <img className="step_jump" src="/images/Shape.png" alt="jump" />
                        <div className="step">
                            <img className="step-img" src="/images/icon_step3.png" alt="step3"/>
                            <p className="step_title">Step 3</p>
                            <p className="step_text">Lorem Ipsum is simply dummy text of the printing and typesetting ind ustry. Lorem Ipsum has been</p>
                        </div>
                        <img className="step_jump" src="/images/Shape.png" alt="jump" />
                        <div className="step">
                            <img className="step-img" src="/images/icon_step4.png" alt="step4"/>
                            <p className="step_title">Step 4</p>
                            <p className="step_text">Lorem Ipsum is simply dummy text of the printing and typesetting ind ustry. Lorem Ipsum has been</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;