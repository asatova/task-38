import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    state = {
        firstName: "",
        email: "",
        message: "",
        nativeLang: "",
        agreement: false,
        gender:"",
    };

    handleValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    validateInput = (e) => {
        if (e.target.value.length < 4) {
            alert("4 tadan kop harf kiriting");
        }
    };

    handleChecked = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
        });
    };

    render() {
        const { firstName, email, message, nativeLang, agreement } = this.state;
        return (
            <div className="container">
                <form>
                    <div>
                        <label htmlFor="firstName">First name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={firstName}
                            onChange={this.handleValue}
                            onBlur={this.validateInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            value={message}
                            onChange={this.handleValue}
                        />
                    </div>
                    <div>
                        <label htmlFor="nativeLang">Native Language</label>
                        <select
                            className="form-control"
                            name="nativeLang"
                            id="nativeLang"
                            value={nativeLang}
                            onChange={this.handleValue}
                        >
                            <option value="">Select a language</option>
                            <option value="uz">Uzbek</option>
                            <option value="ru">Russian</option>
                            <option value="eng">English</option>
                        </select>
                    </div>
                    <div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="agreement"
                            id="agreement"
                            checked={agreement}
                            onChange={this.handleChecked}
                        />
                        <label className="form-check-label" htmlFor="agreement">
                            Agreement
                        </label>
                    </div>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label><br />
                            <input type="radio" name="gender" id="gender" value="male" onChange={this.handleValue} />Male
                            <input type="radio" name="gender" id="gender" value="female" onChange={this.handleValue} />Female

                    </div>
                </form>
            </div>
        );
    }
}

export default App;
