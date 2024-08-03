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

    handleChecked = (e) => {
        this.setState({
            [e.target.name]: e.target.checked,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, agreement } = this.state;

        if (!email && !agreement) {
            alert("Email and rules not valid");
        } else if (email && !agreement) {
            alert("Please, accept to our rules");
        }else if (!email && agreement) {
            alert("email not valid");

        } else if (email && agreement) {
            alert("Congratulations!");
        }
    };

    render() {
        const { email, agreement } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
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
