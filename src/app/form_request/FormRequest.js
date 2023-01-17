import React, {Component} from 'react';
import validator from 'validator';

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            isValidPhone: false,
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

        if(validator.isMobilePhone(arrDataFormForm["phone"], ['ru-RU'])){
            this.setState({
               isValidPhone:true,
               phone: arrDataFormForm["phone"]
            });
        } else {
            alert('Неверный номер телефона');
            this.inputNameRef.current.focus();
        }
    }

    render() {
        return(
        <form className="block-form" method="POST" onSubmit={this.handlerSubmit}>
            <input className="form-input" type="text" name="name" id="userName" placeholder="Full Name"/>
            <input className="form-input" type="email"  ref={this.inputNameRef} name="email" id="userMail" placeholder="Email Address"/>
            <input className="form-input" type="tel" ref={this.inputNameRef} name="phone" id="userNumber" placeholder="Phone Number"/>
            <button type="submit">Request a quote</button>
        </form>
        )
    }
 }

 export default RequestForm;