import React, { Component } from "react";
import services from "../../api/ServicesApi";
import "./ServicesComponent.scss";


class ServicesComponent extends Component {
    render() {
        const data = [];
        services.forEach((services, index) =>{
            data.push(
                <div className="item" key={index}>
                    <div className="item-img">
                        <img src={services.picture} alt="icon"/>
                    </div>
                    <div className="item-text">
                        <span>{services.name}</span>
                        <p>{services.text}</p>
                    </div>
                </div>,
            );

        });
        return (
            <div className="block-services">
                {data}
            </div>
        );
    }
}

export default ServicesComponent;
