import { useState } from "react";
import "./App.css";

const initialInputState = {
    firstName: "",
    lastName: "",
    email: "",
};

function App() {
    const [input, setInput] = useState(initialInputState);
    const [submitted, setSubmitted] = useState(false);

    const firstNameChangeHandler = (e) => {
        setInput((prevState) => ({ ...prevState, firstName: e.target.value }));
    };

    const lastNameChangeHandler = (e) => {
        setInput((prevState) => ({ ...prevState, lastName: e.target.value }));
    };

    const emailChangeHandler = (e) => {
        setInput((prevState) => ({ ...prevState, email: e.target.value }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setSubmitted(true);
        setInput(initialInputState);
    };

    return (
        <div className="form-container">
            <form className="form">
                {submitted && <span className="success-message">Success! Thank you.</span>}
                <div className="form-control">
                    <label className="form-label" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="form-field"
                        placeholder="First Name"
                        id="firstName"
                        value={input.firstName}
                        onChange={firstNameChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="form-field"
                        placeholder="Last Name"
                        id="lastName"
                        value={input.lastName}
                        onChange={lastNameChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-field"
                        placeholder="Email"
                        id="email"
                        value={input.email}
                        onChange={emailChangeHandler}
                    />
                </div>
                <button className="submit-button" onClick={onSubmitHandler}>
                    Submit Form
                </button>
            </form>
        </div>
    );
}

export default App;
