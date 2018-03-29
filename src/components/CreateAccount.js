import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            isFormSubmitted: false,
            emailError: '',
            firstNameError: '',
            lastNameError: ''
        };
        this.saveEmailInfo = this.saveEmailInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveEmailInfo(e) {
        let self = this.state;
        let selfThis = this;
        e.preventDefault();
        if(checkIsFormValid()) {
            this.setState({
                isFormSubmitted: true
            });
        }

        function checkIsFormValid() {
            let isFormValid = true;
            let errors = {
                emailError: '',
                firstNameError: '',
                lastNameError: ''
            };
            checkRequiredValidation('email', self);
    
            const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if ((!self.email) || ((self.email && (!emailRegex.test(self.email))))) {
                isFormValid = false;
                alert("Invalid Email");
            }
    
            if((!self.firstName) || (self.firstName.length < 3)) {
                isFormValid = false;
                alert("First Name should contain atleast 3 characters");
            }
    
            if((!self.lastName) || (self.lastName.length < 3)) {
                isFormValid = false;
                alert("Last Name should contain atleast 3 characters");
            }
    
            selfThis.setState({
                ...selfThis.state,
                ...errors
            });
    
            return isFormValid;
    
            function checkRequiredValidation(fieldName, state) {
                if(!state[fieldName]) {
                    isFormValid = false;
                    errors[`${fieldName}Error`] = 'Is Required';
                }
            }
        }
    }

    

render() {
    return (
        <div className="container-fluid createaccount text-center">
            <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
            <h3>Let's Stay in touch</h3>
            <span id="txt">Emails aren't just for order confirmations. By entering your email, you'll get access to rewards, offers and more</span><br/>
            <div className="col-8 col-sm-8 col-md-6 col-lg-3 col-xl-3 offset-2 offset-sm-2 offset-md-3 offset-lg-5 offset-xl-5 form" >
                <input className="form-control" type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} /><br/>
            </div>
            <div className="col-8 col-sm-8 col-md-6 col-lg-2 col-xl-2 offset-2 offset-sm-2 offset-md-3 offset-lg-5 offset-xl-5">
                <input className="form-control" type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} /><br/>
            </div>
            <div className="col-8 col-sm-8 col-md-6 col-lg-2 col-xl-2 offset-2 offset-sm-2 offset-md-3 offset-lg-5 offset-xl-5">
                <input className="form-control" type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} /><br/>
            </div>
            { this.state.isFormSubmitted ? 
                    (<button id="btnvalidate" onClick={this.saveEmailInfo}>
                        <Link to="/celebratewithus">NEXT</Link>
                     </button> ) : (<button id="btnvalidate" onClick={this.saveEmailInfo}>
                        NEXT
                        </button>) 
            }
        </div>
    );
}
}

export default CreateAccount;