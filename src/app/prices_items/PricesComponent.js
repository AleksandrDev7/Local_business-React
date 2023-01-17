import React, {Component} from "react";
import prices from "../../api/ProductPriceApi";
import './pricesComponent.scss';

class PricesComponent extends Component {
    render() {
        const amount = [];
        prices.forEach((prices, index) => {
            amount.push(
                <div className="product" key={index}>
                    <div className="product-title">
                        <p className="title">{prices.name}</p>
                        <span><sup>&#36;</sup>{prices.price}</span>
                        <p>per month</p>
                    </div>
                    <div className="product-properties">
                        <p>{prices.quantityAcc} account</p>
                        <p>{prices.support}</p>
                        <p>{prices.cloud}</p>
                    </div>
                    <div className="product-button">
                        <button>Get started</button>
                    </div>
                </div>
            )
        });

        return (
            <div className="block-product">
                {amount}
            </div>
        );
    }
}

export default PricesComponent;