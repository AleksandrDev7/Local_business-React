import React, {Component} from "react";
import validator from 'validator';
import "./SubscribeComponent.scss";
import "../home/home.scss";

class SubscribeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidMail: false
        };

        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.inputNameRef = React.createRef();
    }

    handlerSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const inputsData = form.querySelectorAll('input');
        const arrDataFormForm = {};

        Array.from(inputsData).map((e) => {
            const name = e.name;
            arrDataFormForm[name] = (name !== 'phone')
                ? e.value
                : e.value.replace(/\D/g, '').replace(/^7/, '8');
        });

        if(validator.isEmail(arrDataFormForm["email"], ['ru-RU'])){
            this.setState({
                isValidEmail:true,
                email: arrDataFormForm["email"]
            });
        } else {
            alert('Неверная почта');
            this.inputNameRef.current.focus();
        }
    }

    render() {
        return(
            <form className="block-form">
                <input className="form-input form-input_darkBorder" type="text" name="name" id="userNameSubs" placeholder="Name"/>
                <input className="form-input form-input_darkBorder" type="email"  ref={this.inputNameRef} name="email" id="userMailSubs" placeholder="Email Address"/>
                <button type="submit">Subscribe now</button>
            </form>
        );
    }
}

export default  SubscribeComponent;