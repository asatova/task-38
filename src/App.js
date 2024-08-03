import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    state = {
        email: "",
        agreement: false,
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
        const { email, agreement } = this.state;
        return (
            <div className="container">
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={this.handleValue}
                            onBlur={this.validateInput}
                        />
                    </div>

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
                         Terms and Conditions
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
