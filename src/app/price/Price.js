import PricesComponent from "../prices_items/PricesComponent";
import './price.scss';
import '../home/home.scss';



function Price() {
    return (
        <section className="price">
            <div className="wrapper">
                <div id="price" className="block">
                    <div className="block-title dark">
                        <h2>Choos your price</h2>
                        <p>Lorem ipsum is dummy text of the printing typesetting.</p>
                    </div>
                    <PricesComponent />
                </div>
            </div>
        </section>
    );
}

export default Price;