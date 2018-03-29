import React from 'react';
import DatePicker from 'react-datepicker'; 
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CelebrateWithUs extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: ''
          }
          this.handleChange = this.handleChange.bind(this);
        }

        handleChange(date) {
            this.setState({
                startDate: date
            });
        }

render() {
    return (
        <div className="container-fluid celebratewithus text-center">
            <i class="fa fa-birthday-cake fa-5x fa-white" aria-hidden="true"></i>
            <h3>Celebrate With Us</h3>
            <span id="hbdspan">At AMC, we like to celebrate your birthday as much as you do. Let us know when your birthday is and receive exclusive gifts such as popcorn. </span>
            <div id="date-picker">
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} placeholderText="Birthday"/>
            </div>
        </div>
    );
    }
}

export default CelebrateWithUs;